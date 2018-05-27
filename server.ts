// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const app = express();

app.use(awsServerlessExpressMiddleware.eventContext());

app.set('view engine', 'html');

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)

// Export your express server so you can import it in the lambda function.
export = app;
