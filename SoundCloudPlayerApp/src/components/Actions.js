import { TRACKS_LOADED } from './SoundCloudActionTypes';
const SC_KEY = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q';

export const loadTracks = (search) => async (dispatch) => {
  const url = `https://api.soundcloud.com/tracks/?client_id=${SC_KEY}=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: TRACKS_LOADED, tracks: json, search });
    })
    .catch((error) => {
      console.error(error);
    });
};
