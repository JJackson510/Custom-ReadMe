// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown =(data) => {
  return `# ${data.title}

  ## Description
  ${name}

  ${about}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Testing](#testing)
  [Questions](#questions)

  ## Installation
  The steps below will need to be install before you try to rin the program.
  ${install}


  ## Usage

  ## License

  ## Contributing

  ## Testing

  ## Questions
  If you have any questions, please contact me at: https://github.com/${emailInput}

`;
}

module.exports = generateMarkdown;
