import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import { ipcRenderer } from 'electron';
import FileUtil from './utils/FileUtil';
import { remote } from 'electron';

import { setTasks } from './actions/tasks';
import { setNextId } from './actions/nextId';
import { setVisibilityFilter } from './actions/visibilityFilter';


const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
let defaultFilePath = null;

const getDataToPersist = function() {

  const currentState = store.getState();

  return {
    tasks: currentState.tasks,
    visibilityFilter: currentState.visibilityFilter,
    nextId: currentState.nextId
  };
};

const restoreState = function(data) {

  store.dispatch(setTasks(data.tasks));
  store.dispatch(setNextId(data.nextId));
  store.dispatch(setVisibilityFilter(data.visibilityFilter));
};

ipcRenderer.on('open-file', (event) => {

  remote.dialog.showOpenDialog({
    title: 'Open Todo File',
    filters: [{name: 'JSON', extensions: ['json', 'JSON']}],
    properties: [
      'openFile', 'createDirectory', 'showHiddenFiles'
    ]
  }, function (fileNames) {

    if (fileNames === undefined) {

      return;

    } else {

      defaultFilePath = fileNames[0];
      const data = FileUtil.loadJsonFile(defaultFilePath, function(data) {

        console.log('data from file: ', data);

        restoreState(data);

      }, function(err) {

        remote.dialog.showErrorBox("File Open Error", err.message);

      });
    }
  });
});

ipcRenderer.on('save-file', (event) => {

  const data = getDataToPersist();

  if (defaultFilePath) {

    FileUtil.saveJsonFile(data, defaultFilePath, function(err) {

      if (err) {

        remote.dialog.showErrorBox("File Save Error", err.message);
      }
    });

  } else {

    remote.dialog.showSaveDialog({
        title: 'Save Todo File',
        filters: [{name: 'JSON', extensions: ['json', 'JSON']}],
      }, function (fileName) {

        if(fileName === undefined) {

          return;

        } else {

          defaultFilePath = fileName;
          FileUtil.saveJsonFile(data, defaultFilePath, function(err) {

            if (err) {
              remote.dialog.showErrorBox("File Save Error", err.message);
            }
          });
        }
    });
  }
});

ipcRenderer.on('save-file-as', (event) => {

  const data = getDataToPersist();

  remote.dialog.showSaveDialog({
      title: 'Save As... Todo File',
      defaultPath: defaultFilePath,
      filters: [{name: 'JSON', extensions: ['json', 'JSON']}],
    }, function (fileName) {

      if (fileName === undefined) {

        return;

      } else {

        defaultFilePath = fileName;
        FileUtil.saveJsonFile(data, defaultFilePath, function(err) {

          if (err) {
            remote.dialog.showErrorBox("File Save Error", err.message);
          }
        });
      }
  });
});


render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
