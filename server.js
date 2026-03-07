'use strict';
<<<<<<< HEAD

import express from 'express';
import routes from "./routes.js";
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';
=======
import logger from "./utils/logger.js";

import express from 'express';
import routes from './routes.js'; 
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58

const app = express();
const port = 3000;

<<<<<<< HEAD
app.use(express.static("public"));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}`));
=======
app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}!`));
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58
