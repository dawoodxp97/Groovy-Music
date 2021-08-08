export const fPlaylistLink = "most-searched-songs---hindi";
export const fPlaylistLink2 = "csv-SfcHUmHc1EngHtQQ2g__";

export const sPlaylistLink = "90s-ke-remakes";
export const sPlaylistLink2 = "QRr86R9NOmEGSw2I1RxdhQ__";
export const tPlaylistLink = "ishq-remixed";
export const tPlaylistLink2 = "0kH4kn9wzXXfemJ68FuXsA__";
export const frPlaylistLink = "allu-arjun-style";
export const frPlaylistLink2 = "k7ssHswvMyU_";
export const trendingPlaylist =
  "https://www.jiosaavn.com/featured/tere-bina/CP3wdqyTI6Y_";

const requests = {
  fetchTrendingPlaylist: `/playlist/?query=${trendingPlaylist}&lyrics=true`,
  fetchFPlaylist: `/playlist/?query=${fPlaylistLink}&lyrics=true`,
  fetchSPlaylist: `/playlist/?query=${sPlaylistLink}&lyrics=true`,
  fetchTPlaylist: `/playlist/?query=${tPlaylistLink}&lyrics=true`,
  fetchFrPlaylist: `/playlist/?query=${frPlaylistLink}&lyrics=true`,
  fetchAll: `/result/?query=<insert-jiosaavn-link-or-query-here>&lyrics=true`,
  fetchSong: `/song/?query=<insert-jiosaavn-song-link>&lyrics=true`,
  fetchAlbum: `/album/?query=<insert-jiosaavn-album-link>&lyrics=true`,
  fetchLyrics: `/lyrics/?query=<insert-jiosaavn-song-link-or-song-id>&lyrics=true`,
};

export default requests;
