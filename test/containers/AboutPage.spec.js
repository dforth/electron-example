import { expect } from 'chai';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import AboutPage from '../../app/containers/AboutPage';
import configureStore from '../../app/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = renderIntoDocument(
    <Provider store={store}>
      <AboutPage />
    </Provider>
  );

  return {
    app,
    buttons: scryRenderedDOMComponentsWithTag(app, 'button').map(button => button),
    content: findRenderedDOMComponentWithClass(app, 'container')
  };
}

describe('containers', () => {
  describe('AboutPage', () => {
    it('should display something', () => {
      const { content } = setup();
      expect(content.textContent).to.not.be.empty;
    });

  });
});
