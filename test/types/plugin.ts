import * as Fastify from 'fastify';
import * as LP from '../../plugin';

const defaultOptions = {
  cookieDecorator: 'cookies',
  cookieKey: 'fastifyLanguageParser',
  order: [],
  headerDecorator: 'headers',
  headerKey: 'accept-language',
  fallbackLng: 'en',
  pathDecorator: 'params',
  pathKey: 'lng',
  queryDecorator: 'query',
  queryKey: 'lng',
  sessionDecorator: 'session',
  sessionKey: 'fastifyLanguageParser',
  supportedLngs: []
};

const app = Fastify();

const opts = Object.assign(defaultOptions, { order: ['query1'], pathKey: 1 });

app.register(LP, opts);
