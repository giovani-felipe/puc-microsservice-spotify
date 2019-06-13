const {SpotifyService } = require('../services');

class PlaylistController{
  async getPlaylist(req, res, next) {
    try {
      let spotifyService = new SpotifyService();
      let { search } = req.params;
      let { body } = await spotifyService.getPlaylist(search);
      res.json(body);
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  }
}

module.exports = PlaylistController;