const fs = require('fs');
const spreader = require('./spreader') ;
const dirsList = require('./dirsList')
const users = require('./users') ;

/////////////////////////
fs.mkdir('./in', {recursive: true}, err => {
    if (err) {
        console.log(err);
    }
})

////////////////////////
users.forEach(user => {
 fs.writeFile(`./in/${user.name}.txt`,
     // `{ "name":" ${user.name}" , "gender":"${user.gender}", "age":"${user.age}"}`,
     JSON.stringify(user),
      (err)=>{
                    if (err){
                        console.log(err);
                    }
                })
        }
    );
//////////////////////////
dirsList.forEach(dirName =>{
    fs.mkdir(dirName, {recursive: true}, err => {
        if (err) {
            console.log(err);
        }
    })
});
/////////////////////////////
fs.readdir('./in/',(err,files )=> {
    if (err) {
        console.log(err);
    }
    else  {
        files.forEach(file => {
            fs.readFile(`./in/${file}`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                     spreader(JSON.parse(data.toString()),file);
                      }
            })
        })
          }
});
////////////////////////
// fs.rmdir('./in', err => {
//     if (err) {
//         console.log(err);
//     }
// });