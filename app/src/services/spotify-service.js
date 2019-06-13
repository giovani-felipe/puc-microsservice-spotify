const SpotifyWebApi = require('spotify-web-api-node');

class SpotifyService{

  constructor() {
    this._spotify = new SpotifyWebApi();
    this._spotify.setAccessToken("BQCnmRY9EH7uducQ5kQVZCjiEb97jRwpcAlfriKnYwfJ54jyrDSE7K73mQekGdQOtDCB-OM8m14NsIXbZ5k");
  }

  async getArtista(search) {
    return await this._spotify.searchArtists(search);
  }

  async getPlaylist(search) {
    return await this._spotify.searchPlaylists(search);
  }

  async getArtista(search) {
    return await this._spotify.searchAlbums(search);
  }
}

module.exports = SpotifyService;