module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://restaurant-strapi-postgres.onrender.com'],
      headers: '*', // Permite todos los encabezados
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite todos los métodos
    },
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
