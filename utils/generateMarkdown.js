const licenses = require('./licenses.js');

// function to generate markdown for README
// Destructure the answers object into indiviudual elements and use those to fill in sections of the readme
// Uses the license type from answers to get the correct badge from the licenseBadges object in the licenses file
// Template literal is not indented to prevent indentation in the file.
const generateMarkdown = ({username, email, title, description, url, installation, usage, license, contribution, testing, credits}) => {
  return `
# ${title}
${licenses.licenseBadges[license]}

## Description
${description}

[Link to Deployed Project](${url})


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [Credits](#credits)


## Installation
To install the necessary dependencies, run:
\`\`\`
${installation}
\`\`\`


## Usage
${usage}


## License
This project is licensed under the **${license}** license.


## Contributing
${contribution}


## Tests
In order to run tests on the project, in the console run:
\`\`\`
${testing}
\`\`\`


## Questions
If you have any questions about this project or repository, please open an issue or contact me at [${email}](mailto:${email}).

You can find more of my work at GitHub under my username [${username}](https://github.com/${username}).


## Credits
${credits}
`
};

// Export the function to be used in other files (index.js)
module.exports = { generateMarkdown };
