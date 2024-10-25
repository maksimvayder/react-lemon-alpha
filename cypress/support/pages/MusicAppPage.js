class MusicAppPage {
    visit() {
      cy.visit('https://vite-react-alpha-lemon.vercel.app/');
    }
  
    searchForTrack(trackName) {
      cy.get('#\\:r0\\:').type(trackName);
    }
  
    verifySearchResultsContain(trackName) {
      cy.get('p').should('contain.text', trackName);
    }
  
    addFirstTrackToPlaylist() {
      cy.get('button').first().click();
    }
  
    verifyPlaylistLength(expectedLength) {
      cy.get('#playlist > .MuiBox-root > :nth-child(2)').should('have.length', expectedLength);
    }
  
    checkMultipleTracks(trackIndices) {
      trackIndices.forEach(index => {
        cy.get(`:nth-child(${index}) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input`).check();
      });
    }
  
    addSelectedTracks() {
      cy.get('.MuiButton-sizeMedium').click();
    }
  
    verifyAddedTracksCount(expectedCount) {
      cy.get('#playlist').find('.MuiGrid-container').should('have.length', expectedCount);
    }
  }
  
  export default new MusicAppPage();
  
  