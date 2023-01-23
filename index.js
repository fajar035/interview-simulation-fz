/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mainRouter = require('./src/routers/mainRouter');

const server = express();
const logger = morgan(
  ':method : url :status :res[content-length] - :response-time ms'
);
const host = 'http://localhost:';
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: [process.env.HOSTBACKEND, '*'],
  allowedHeaders: ['x-access-token', 'content-type'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
};

server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(logger);
server.use(mainRouter);

server.listen(port, () => {
  console.log(`Server Running at ${host}${port}`);
});
