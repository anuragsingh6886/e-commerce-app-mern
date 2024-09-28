const RateLimit = require('express-rate-limit');
const redis = require('./clients/redis.js');
const RedisStore = require('rate-limit-redis');

const limiter = new RateLimit({
  store: new RedisStore({
    client: redis,
    resetExpiryOnChange: true,
    expiry: 30,
  }),
  max: 1000,
});

module.exports = limiter;