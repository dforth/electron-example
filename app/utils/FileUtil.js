import fs from 'fs';

const loadJsonFile = function(filePath, successCallback, errorCallback) {

  fs.readFile(filePath, 'utf-8', function(err, data) {

    if (err) {

      if (errorCallback) {

        errorCallback(err);
      }
    } else {

      const returnValue = JSON.parse(data);

      if (successCallback) {

        successCallback(returnValue);
      }
    }
  });
};


const saveJsonFile = function(data, filePath, errorCallback) {

  const stringToOutput = JSON.stringify(data);

  fs.writeFile(filePath, stringToOutput, errorCallback);

};


export default {

  loadJsonFile: loadJsonFile,
  saveJsonFile: saveJsonFile
};
