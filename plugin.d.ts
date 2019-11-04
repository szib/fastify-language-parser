// Definitions by: Ivan Szebenszki <https://github.com/szib>

import { Server, IncomingMessage, ServerResponse } from 'http';

import fastify = require('fastify');

type order = 'cookie' | 'header' | 'path' | 'query' | 'session';

declare const fastifyLP: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  {
    cookieDecorator: string;
    cookieKey: string;
    order: order;
    headerDecorator: string;
    headerKey: string;
    fallbackLng: string;
    pathDecorator: string;
    pathKey: string;
    queryDecorator: string;
    queryKey: string;
    sessionDecorator: string;
    sessionKey: string;
    supportedLngs: string[];
  }
>;

export = fastifyLP;
