'use strict';

import logger from "./utils/logger.js";
import express from 'express';
const router = express.Router();

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
<<<<<<< HEAD
import playlist from './controllers/playlist.js';

=======
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);
<<<<<<< HEAD
router.get('/playlist/:id', playlist.createView);

=======
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58

router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
