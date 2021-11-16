// Creates a license badge based on the license choosen in previous question prompts
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  }

  return `
  ![License-Badge](https://img.shields.io/static/v1?label=License&message=${license}&color=Green.svg "License Badge")
  `
}


// Using license choice in questions portion, matches to fill the description of which license the user chooses
function renderLicenseSection(license) {
  if (license === 'GNU-AGPLv3') {
    return `
    Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.
    View full permissions at: https://choosealicense.com/licenses/agpl-3.0/
    `
  }
  if (license === 'GNU-GPLv3') {
    return `
    Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.  
    View full permissions at: https://choosealicense.com/licenses/gpl-3.0/
    `
  }
  if (license === 'GNU-LGPLv3') {
    return `
    Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.
    View full permissions at: https://choosealicense.com/licenses/lgpl-3.0/
    `
  }
  if (license === 'Mozilla-Public-License-2.0') {
    return `
    Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
    View full permissions at: https://choosealicense.com/licenses/mpl-2.0/
    `
  }
  if (license === 'Apache-License-2.0') {
    return `
    A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    View full permissions at: https://choosealicense.com/licenses/apache-2.0/
    `
  }
  if (license === 'MIT-License') {
    return `
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
    View full permissions at: https://choosealicense.com/licenses/mit/
    `
  }
  if (license === 'Boost-Software-License-1.0') {
    return `
    A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code
    View full permissions at: https://choosealicense.com/licenses/bsl-1.0/
    `
  }
  if (license === 'The-Unlicense') {
    return `
    A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.
    View full permissions at: https://choosealicense.com/licenses/unlicense/
    `
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License -- ${data.license}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  Please check out my GitHub at https://github.com/${data.github}

  If you have further questions please email me at: ${data.email}
`
}

module.exports = { generateMarkdown };
