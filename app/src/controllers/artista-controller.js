const {SpotifyService } = require('../services');
class ArtistaController{
  async getArtista(req, res, next) {
    try {
      let spotifyService = new SpotifyService();
      let { search } = req.params;
      let {body} = await spotifyService.getArtista(search);
      res.json(body);
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  }
}

module.exports = ArtistaController;