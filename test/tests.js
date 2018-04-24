var assert = require('assert');
var sinon = require('sinon');
var eventListener = require('../add-on/content-script.js');
describe('Focus Not Changed When Inside Text Box', function() {
  describe('#Key Listener Location', function() {
    it('GivenCurrentFocusIsATextAreaThenNavigateToSearchBarShouldNotBeInvoked', function(){
      sinon.spy(navigateToPagesSearchBar)
      expect(navigateToPagesSearchBar.assertNotCalled, 'navigate should not be called when in a Text Area').to.be.true
    });
    it('GivenCurrentFocusIsAnInputElementThenNavigateToSearchBarShouldNotBeInvoked', function(){
      sinon.spy(navigateToPagesSearchBar)
      expect(navigateToPagesSearchBar.assertNotCalled, 'navigate should not be called when in an Input Element').to.be.true
    });
    it('GivenCurrentPageIsBlackListedThenNavigateToSearchBarShouldNotBeInvoked', function(){
      // Not implemented yet however required for pages like google sheets which seems to run as role=application
      sinon.spy(navigateToPagesSearchBar)
      expect(navigateToPagesSearchBar.assertNotCalled, 'navigate should not be called when on a blacklisted page').to.be.true
    });
  });

  describe('#Find Search Box', function() {
    it('GivenInputElementTypeIsSearchThenElementIsFocused', function(){
      Element searchElement = new Element(name = 'typeSearch', type = 'search');
      mockPage.addElement(searchElement);
      navigateToPagesSearchBar();
      assert.equal(true, searchElement.hasFocus());
    });
    it('GivenInputElementNameIsqThenElementIsFocused', function(){
      // Google's standard name for the search box
      Element searchElement = new Element(name = 'q');
      mockPage.addElement(searchElement);
      navigateToPagesSearchBar();
      assert.equal(true, searchElement.hasFocus());
    });
    it('GivenInputElementNameIsQThenElementIsFocused', function(){
      Element searchElement = new Element(name = 'Q');
      mockPage.addElement(searchElement);
      navigateToPagesSearchBar();
      assert.equal(true, searchElement.hasFocus());
    });
    it('GivenInputElementPlaceholderStartsWithIgnoreCasesearchThenElementIsFocused', function(){
      Element searchElement = new Element(placeholder = 'sEaRch plus extrat text');
      mockPage.addElement(searchElement);
      navigateToPagesSearchBar();
      assert.equal(true, searchElement.hasFocus());
    });
  });
});
