const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const glob = require('glob');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

//const entryPaths = glob.sync(`./src/+(client|js)/*.js`);
const entryPaths = ['./src/index.js', './src/other.js'];

const getEntryPoint = (answer, input) => {
  const target = entryPaths.filter(item => item.indexOf(input) !== -1);
  const result = target.length > 0 ? target : entryPaths;
  return Promise.resolve(result);
};

const askQuestions = () => {
  const questions = [
    {
      type: 'autocomplete',
      name: 'ENTRY',
      message: "select webpack's entry point",
      source: getEntryPoint
    }
  ];
  return inquirer.prompt(questions);
};

const init = async () => {
  console.log(chalk.blue(figlet.textSync('Ohanky')));
  return await askQuestions();
};

const run = async () => {
  const answer = await init();

  const entry = {
    main:answer.ENTRY
  };

  return entry;
};

module.exports = run;
