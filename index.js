const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions to use with inquirer
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email adderess you use for your GitHub account'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for using your project?'
    },
    {
        type: 'expand',
        name: 'license',
        message: 'How are you licensing your repository?',
        choices: [
            {key:'afl', name: 'Academic Free License', value: 'afl-3.0'},
            {key:'apa', name: 'Apache License', value: 'afl-3.0'},
            {key:'art', name: 'Artistic License', value: 'artistic-2.0'},
            {key:'bsl', name: 'Boost Software License', value: 'bsl-1.0'},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'cc', name: 'Creative Commons License Family', value: 'cc},
            {key:'cca', name: 'Creative Commons Attribution 4.0', value: 'cc-by-4.0'},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'wtf', name: 'Do What The F*ck You Want To Public License', value: 'wtfpl'},
            {key:'ecl', name: 'Educational Community License v2.0', value: 'ecl-2.0'},
            {key:'', name: '', value: ''}
            {key:'eup', name: 'European Union Public License 1.1', value: 'eupl-1.1'},
            {key:'gnu', name: 'GNU General Public License family', value: 'gpl'},
            {key:'gnl', name: 'GNU Lesser General Public License family', value: 'lgpl'},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'isc', name: 'ISC', value: 'isc'},
            {key:'lat', name: 'LaTeX Project Public License v1.3c', value: 'llpl-1.3c'},
            {key:'mic', name: 'Microsoft Public License', value: 'ms-pl'},
            {key:'mit', name: 'MIT', value: 'mit'},
            {key:'moz', name: 'Mozilla Public License 2.0', value: 'mpl-2.0'},
            {key:'osl', name: 'Open Software License 3.0', value: 'osl-3.0'},
            {key:'pst', name: 'PostgreSQL License', value: 'postgresql'},
            {key:'', name: '', value: ''},
            {key:'', name: '', value: ''},
            {key:'unl', name: 'The Unlicense', value: 'unlicense'},
            {key:'zlb', name: 'zLib License', value: 'zlib'},
        ],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for using your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for using your project?'
    },
];

const promptUser = () => {
    return inquirer.prompt(questions)
}

// from starter code:
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();