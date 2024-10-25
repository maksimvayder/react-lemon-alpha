/// <reference types='cypress' />
import MusicAppPage from '../support/pages/MusicAppPage';

describe('Music App - Core Features', () => {
  beforeEach(() => {
    MusicAppPage.visit();
  });

  it('should filter tracks based on the search input', () => {
    const searchQuery = 'Winter Winds';
    MusicAppPage.searchForTrack(searchQuery);
    MusicAppPage.verifySearchResultsContain(searchQuery);
  });

  it('should add a single track to "Your Playlist" when clicking the "+" button', () => {
    MusicAppPage.addFirstTrackToPlaylist();
    MusicAppPage.verifyPlaylistLength(1);
  });

  it('should add multiple selected tracks to "Your Playlist"', () => {
    MusicAppPage.checkMultipleTracks([1, 2, 3]);
    MusicAppPage.addSelectedTracks();
    MusicAppPage.verifyAddedTracksCount(3);
  });

  it('should display no results for a non-existing track', () => {
    const searchQuery = 'NonExistingTrackName';
    MusicAppPage.searchForTrack(searchQuery);
    MusicAppPage.verifyNoResults();
  });
});

