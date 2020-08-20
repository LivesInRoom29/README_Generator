const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');

// Array of questions to use with inquirer
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adderess:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:'
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the link to your deployed project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for using your project?',
    },
    {
        type: 'expand',
        name: 'license',
        message: 'How are you licensing your project?',
        choices: [
            {key:'a', name: 'Apache License', value: 'apache-2.0'},
            {key:'b', name: 'Boost Software License', value: 'bsl-1.0'},
            {key:'c', name: 'BSD 2-Clause "Simplified" License', value: 'bsd-2-clause'},
            {key:'d', name: 'BSD 3-Clause "New" or "Revised" License', value: 'bsd-3-clause'},
            {key:'e', name: 'Creative Commons Zero v1.0 Universal', value: 'cc0-1.0'},
            {key:'f', name: 'Creative Commons Attribution 4.0', value: 'cc-by-4.0'},
            {key:'g', name: 'Eclipse Public License', value: 'epl-1.0'},
            {key:'i', name: 'GNU Affero General Public License v3.0', value: 'agpl-3.0'},
            {key:'j', name: 'GNU General Public License v2.0', value: 'gpl-2.0'},
            {key:'k', name: 'GNU General Public License v3.0', value: 'gpl-3.0'},
            {key:'l', name: 'GNU Lesser General Public License v3.0', value: 'lgpl-3.0'},
            {key:'m', name: 'IBM Public License v1.0', value: 'ipl-1.0'},
            {key:'n', name: 'MIT', value: 'mit'},
            {key:'o', name: 'Mozilla Public License 2.0', value: 'mpl-2.0'},
            {key:'p', name: 'Open Data Commons Attribute License (BY)', value: 'odc-by'},
            {key:'q', name: 'Open Database License', value: 'odbl'},
            {key:'r', name: 'Public Domain Dedication and License', value: 'pddl'},
            {key:'s', name: 'The Artistic License 2.0', value: 'artisitic-2.0'},
            {key:'t', name: 'The Unlicense', value: 'unlicense'},
            {key:'u', name: 'zLib License', value: 'zlib'},
        ],
        pageSize: 20
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be used to run tests on your project?',
        default: 'npm test'
    },
];

// Use the inquirer module to get user input (answers to the questions).
const promptUser = () => {
    return inquirer.prompt(questions);
};

// from starter code:
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log("README file was successfully created!")
    });
};

// function to initialize program
const init = async () => {
    try {
        const answers = await promptUser();

        const readme = generateMD.generateMarkdown(answers);

        await writeToFile('README1.md', readme);

    } catch(err) {
        console.log(err);
    }
};

// function call to initialize program
init();