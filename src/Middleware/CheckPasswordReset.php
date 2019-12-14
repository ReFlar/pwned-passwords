<?php

/*
 * This file is part of fof/pwned-passwords.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\PwnedPasswords\Middleware;

use Flarum\Http\UrlGenerator;
use Flarum\User\PasswordToken;
use FoF\PwnedPasswords\Password;
use Illuminate\Support\Arr;
use Illuminate\Support\MessageBag;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\RedirectResponse;
use Zend\Diactoros\Uri;

class CheckPasswordReset implements MiddlewareInterface
{
    /**
     * @var UrlGenerator
     */
    private $url;

    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $data = $request->getParsedBody();
        $uri = new Uri(app()->url('/reset'));
        $path = $request->getUri()->getPath();

        if ($request->getMethod() === 'POST' && $uri->getPath() === $path) {
            $token = PasswordToken::findOrFail($data['passwordToken']);

            if (Arr::has($data, 'password') && Password::isPwned($data['password'])) {
                $translator = app('translator');
                $request->getAttribute('session')->put('errors', new MessageBag([$translator->trans('fof-pwned-passwords.error')]));

                return new RedirectResponse($this->url->to('forum')->route('resetPassword', ['token' => $token->token]));
            }
        }

        return $handler->handle($request);
    }
}
