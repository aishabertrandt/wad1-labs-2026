'use strict';
<<<<<<< HEAD

import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Aisha's App Dashboard",
      playlists: playlistStore.getAllPlaylists()
    };
    
    logger.debug(viewData.playlists);
    
    response.render('dashboard', viewData);
  },
};

=======
import logger from "../utils/logger.js";

const playlist = [
  {
    id: 1,
    title: "Piano Sonata No. 3",
    artist: "Beethoven"
  },
  {
    id: 2,
    title: "Piano Sonata No. 7",
    artist: "Beethoven"
  },
  {
    id: 3,
    title: "Piano Sonata No. 10",
    artist: "Beethoven"
  }
];

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!")
    logger.debug("Loading the playlist", playlist);
    response.json(playlist);   
  },
};


>>>>>>> 8042c1b603b3db38a7273c3cd9075d9adefcfe58
export default dashboard;
