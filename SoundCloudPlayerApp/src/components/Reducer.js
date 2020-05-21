import { TRACKS_LOADED, PLAY_TRACK } from './SoundCloudActionTypes';

const initialState = {
  tracks: [],
  recentSearches: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_LOADED:
      return {
        ...state,
        tracks: action.tracks,
        recentSearches: state.recentSearches.concat(action.search)
      };

    case PLAY_TRACK:
      return {
        ...state
      };
    default:
      return state;
  }
};
