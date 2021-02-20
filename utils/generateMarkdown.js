// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(data.license === 'none') {
    console.log(data.badge);
    return '';
    } else {
      return `![alt text](https://shields.io/badge/license-${badge}-green)`;
    };  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(data.license === 'no') {
    return "";
    } if (data.license === 'yes'){
    return renderLicenseLink();
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title
${data.title}

![github profile](github.com/${data.username}?tab=repositories)
![github app](${data.username}.github.io/${data.app}/)

## Description
${data.description}

## Installation
${data.installation}

## Collaborators
${data.collaborators}

## License
${renderLicenseSection()}

`;
}

module.exports = generateMarkdown;
