const {SpotifyService } = require('../services');
class MusicaController{
  async getMusica(req, res, next) {
    try {
      let spotifyService = new SpotifyService();
      let { search } = req.params;
      let { body } = await spotifyService.getMusica(search);
      res.json(body);
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  }
}

module.exports = MusicaController;