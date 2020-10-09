//Kurt Chiu 101190261 Lab test 1 - COMP3123
const express = require('express');
const app = express();
var fs = require('fs');
const path = require('path');

const directory = 'Logs';

function removeFiles() {
    if (fs.existsSync(directory)) {
        fs.readdir(directory, (err, files) => {
            if (err) {
                throw err;
            }

            files.forEach(file => {
                console.log('delete files...' + file);

                fs.unlink(path.join(directory, file), (err) => {
                    if (err) throw err;
                });
            });
        });

        // Set delay in order to allow directory to empty
        // before excuting the command..
        setTimeout(() => {
            fs.rmdir(directory, (err) => {
                if (err) throw err;
            });
        }, 500);
    }
}

function addFiles() {
    setTimeout(() => {
        fs.mkdir(path.join(__dirname, 'Logs'), (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }, 1000);

    // Wait for system to recognize Logs as been created
    setTimeout(() => {
        process.chdir("Logs");
        for (i = 0; i < 10; i++) {
            console.log('log' + i + '.txt');
            fs.writeFile('log' + i + '.txt', "Some random text", (err) => {
                if (err) throw err;
            });
        }
    }, 1500);
   
}

removeFiles();
addFiles();