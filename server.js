const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
});

fastify.register(require('point-of-view'), {
    engine: {
        ejs: require('ejs'),
    },
    root: 'views',
    includeViewExtension: true,
    options: {
        filename: path.resolve('views'),
    },
});

fastify.setNotFoundHandler(async (request, reply) => {
    return reply.view('404');
});

fastify.get('/', async (request, reply) => {
    return reply.view('index');
});
fastify.get('/menu', async (request, reply) => {
    return reply.view('menu');
});
fastify.get('/heroes', async (request, reply) => {
    return reply.view('heroes');
});

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 5000, '0.0.0.0');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
