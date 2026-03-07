'use strict';
import logger from "../utils/logger.js";
<<<<<<< HEAD
import empStore from "../models/emp-store.js";

=======
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58

const about = {
  createView(request, response) {
    logger.info("About page loading!");
<<<<<<< HEAD
   
      const viewData = {
      title: "Aisha's App About",
      emp: empStore.getEmpInfo()
    };
    logger.info(viewData.emp)
    response.render('about', viewData); 
  },
};

export default about;
=======
    response.send('About the Playlist app');   
  },
};


export default about;
>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58
