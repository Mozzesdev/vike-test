export const {
  NODE_ENV = "development",
  PORT = 3000,
  BASE = "/",
  ABORT_DELAY = "1000",
  MYSQL_CONFIG,
  JSW_KEY,
  ACCEPT_ORIGINS,
  SALT_ROUNDS = 10,
  REDIS_PASSWORD
} = process.env;
