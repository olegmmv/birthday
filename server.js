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

fastify.get('/heroes', async (request, reply) => {
    return reply.view('heroes');
});

fastify.get('/info', async (request, reply) => {
    return reply.view('info');
});

const prizes = {
    oleg: '+3 к удаче на защите диплома.',
    asya: '+1 к харизме во время концерта.',
};
const tusaDate = new Date('June 20, 2021 19:00:00');
fastify.get('/menu', async (request, reply) => {
    const { hero } = request.query;
    const showMenu = Date.now() >= +tusaDate;
    return reply.view('menu', { prize: prizes[hero], showMenu });
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
