// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const { generateMarkdown } = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter your project name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description about your project!'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter and include any relevant installation instructions!'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter and include specific usage information relevant to your project!'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter any relevant information in order to assist others that would want to contribute to your project!'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter and include specific information about how to run further tests on your application!'
        }
    ])
}

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.MD', fileContent, err => {
            if (err){
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
questions()
