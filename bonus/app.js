///////////
//перемістити всі файли з усіх папок в одну
//
//
const fs = require('fs');
const path = require("path");

const mainPath = __dirname;
////////////////////////
const reMovFunction = (oldPath, oldName) => {
    fs.rename(oldPath, path.join(mainPath, 'allFile', oldName), (err) => {
        if (err) {
            console.log(err);
        }
    });
}
////////////////////////////////
const dril = (PathNew) => {
    fs.readdir(PathNew, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                const pathIn = path.join(PathNew, file)
                fs.stat(pathIn, (err, stats) => {
                    if (err) {
                        console.log(err)
                    } else {
                        if ((stats.isFile()) && (file !== 'app.js')) {
                            reMovFunction(pathIn, file)
                        }
                        if ((stats.isDirectory()) && (file !== 'allFile')) {
                            dril(pathIn)
                        }
                    }
                })
            })
        }
    });
}
////////////////////////////////
dril(mainPath);






