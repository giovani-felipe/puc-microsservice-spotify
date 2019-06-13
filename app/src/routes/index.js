const { Router } = require('express');
const router = Router();
const { ArtistaController,PlaylistController,MusicaController} = require('../controllers');
const artistaController = new ArtistaController();
const playlistController = new PlaylistController();
const musicaController = new MusicaController();
// artistas
router
  .route('/artistas/:search')
  .get(artistaController.getArtista);

// playlist
router
  .route('/playlists')
  .get(playlistController.getPlaylist);

// musicas
router
  .route('/musicas')
  .get(musicaController.getMusica);


// letras
router
  .route('/letras')
  .get();

module.exports = router;