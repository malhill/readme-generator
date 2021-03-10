// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    // console.log(data.badge);
    return '';
  } else {
    return `![${license} Badge](https://shields.io/badge/license-${license}-green)`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no') {
    return "";
  } else {
    return `This project is licensed can be viewed by: [${license} Badge](https://choosealicense.com/licenses/${license})`;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let markdown = `
# <center align=center>${data.title}</center>

* [github profile](https://github.com/${data.username}?tab=repositories)
* [github app](${data.username}.github.io/${data.app}/)

## Description
${data.description}

## Installation
${data.installation}

## Collaborators
${data.collaborators}

${renderLicenseSection(data.license)}

`;

  return markdown;
}

module.exports = generateMarkdown;
