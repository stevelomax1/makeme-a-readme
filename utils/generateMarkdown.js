 //function that returns a license badge based on which license is passed in, If there is no license, return an empty string
 function LicenseBadge(license) {
  if(license !== 'None'){
    return `![Static Badge](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}
//function that returns the license link ,If there is no license, return an empty string
function LicenseLink(license) {
  if(license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
  }


//function that returns the license section of README,If there is no license, return an empty string
function LicenseSection(license) {
  if(license !== 'None') {
  return  `## License

  This project is licensed by ${license}.`;
}
return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${LicenseBadge(data.license)}

## Description

${data.description}

## Table of contents

*[Insatllataion](#installation)

*[Usage](#Usage)

${LicenseLink(data.license)}

*[Contributing](#contibuting)

*[Test](#test)

*[Questions](#questions)

## Installation

To install dependencies, follow these commands:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${LicenseSection(data.license)}

## Contributing

${data.contributing}

## Testing

To run tests, run this command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, contact me at ${data.email}.

Find more of my projects at [${data.github}](https://github.com/${data.github}/).


`;
}

module.exports = generateMarkdown;
