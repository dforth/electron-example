/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
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
import ControlBar from '../../app/components/ControlBar';


function setup() {
  const actions = {
    addTask: spy(),
    completeAll: spy(),
    setVisibilityFilter: spy(),
    incrementId: spy()
  };

  const component = renderIntoDocument(<ControlBar nextId={0} visibilityFilter={"SHOW_ALL"} {...actions} />);
  return {
    component,
    actions,
    buttons: scryRenderedDOMComponentsWithTag(component, 'button').map(button => button),
    inputs: scryRenderedDOMComponentsWithTag(component, 'input').map(input => input),
    selects: scryRenderedDOMComponentsWithTag(component, 'select').map(select => select),
    content: findAllInRenderedTree(component, component => {
      return true;
    })
  };
}


describe('ControlBar component', () => {
  it('should have content', () => {
    const { content } = setup();
    expect(content).not.to.be.null;
  });

  it('first button should call completeAll', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[0]);
    expect(actions.completeAll.called).to.be.true;
  });

  it('second button should call addTask', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[1]);
    expect(actions.addTask.called).to.be.true;
    expect(actions.incrementId.called).to.be.true;
  });

  it('hitting enter in the input field should call addTask', () => {
    const { buttons, actions } = setup();
    Simulate.click(buttons[1]);
    expect(actions.addTask.called).to.be.true;
    expect(actions.incrementId.called).to.be.true;
  });

  it('selecting a filter should call setVisibilityFilter', () => {
    const { selects, actions, inputs } = setup();
    Simulate.keyUp(inputs[0], {key: "Enter", keyCode: 13, which: 13});
    expect(actions.addTask.called).to.be.true;
    expect(actions.incrementId.called).to.be.true;
  });
});
