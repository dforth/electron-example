import { expect } from 'chai';
import React from 'react';
import {
  renderIntoDocument,
  findAllInRenderedTree,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentsWithTag,
  findRenderedComponentWithType,
  scryRenderedComponentWithType,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import HomePage from '../../app/containers/HomePage';
import configureStore from '../../app/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = renderIntoDocument(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  return {
    app,
    buttons: scryRenderedDOMComponentsWithTag(app, 'button').map(button => button),
    inputs: scryRenderedDOMComponentsWithTag(app, 'input').map(input => input),
    taskList: scryRenderedDOMComponentsWithTag(app, 'ul').map(ul => ul),
    selects: scryRenderedDOMComponentsWithTag(app, 'select').map(select => select),
    content: findRenderedDOMComponentWithClass(app, 'container')
  };
}


describe('containers', () => {
  describe('HomePage', () => {

    it('should display initial content', () => {
      const { content } = setup();
      expect(content.textContent).to.not.be.empty;
    });

    /*
    it('should add task when enter key is pressed', () => {
      const { buttons, input, content, taskList } = setup();
      console.log('taskList: ', taskList);
      input.value = 'Test Value';
      Simulate.click(buttons[1]);

      console.log('test: ', taskList[0]);

      expect(taskList[0].children[0].textContent).to.equal(1);
    });

    */
  });
});
