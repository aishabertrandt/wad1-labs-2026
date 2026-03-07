'use strict';
<<<<<<< HEAD

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
=======
import logger from "../utils/logger.js";
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
<<<<<<< HEAD
    
    const viewData = {
      title: "Welcome to Aisha's app!",
      info: appStore.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('start', viewData);   
  },
};

=======
    response.send('Welcome to the Playlist app!');   
  },
};


>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58
export default start;
