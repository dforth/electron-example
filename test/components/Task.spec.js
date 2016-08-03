/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import Task from '../../app/components/Task';


function setup() {
  const actions = {
    removeTask: spy(),
    toggleTask: spy()
  };
  const testTask = {
    id:0, name:'test', completed:false
  }
  const component = renderIntoDocument(<Task task={testTask} {...actions} />);
  return {
    component,
    actions,
    buttons: scryRenderedDOMComponentsWithTag(component, 'button').map(button => button),
    listItem: scryRenderedDOMComponentsWithTag(component, 'li').map(li => li),
  };
}


describe('Task component', () => {
  it('should have content', () => {
    const { listItem } = setup();
    expect(listItem).not.to.be.null;
  });

  it('first button should call toggleTask', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[0]);
    expect(actions.toggleTask.called).to.be.true;
  });

});
