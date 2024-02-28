const createFileHeader = require('../../utils/create-file-header/create-file-header');
const addNewLines = require('../../utils/add-new-lines/add-new-lines');
const variablesWithPrefix = require('../../utils/variables-with-prefix/variables-with-prefix');

const scssVariablesFont = {
  name: 'scss/variables/font',
  formatter(dictionary) {
    let output = createFileHeader();

    output += addNewLines(':root {', 1);
    output += variablesWithPrefix('  $', dictionary.allProperties);
    output = addNewLines(output, 1);
    output = addNewLines(`${output}}`, 1);

    return output;
  },
};

module.exports = scssVariablesFont;
