const fs = require('fs');
// const users = require('./users') ;
const spreader = require('./spreader') ;
// for( const user of  users)  {
//     fs.writeFile(`./in/${user.name}.txt`,`{name:"${user.name}",gender:"${user.gender}"}`,
//    (err)=>{
//      if (err){
//             console.log(err);
//             }
//     });
// };

fs.readFile('./in/Sasha.txt',(err,data )=>{
    if (err){
        console.log(err);
    }
    else{

        let userData = data.toString();
        console.log(userData);
        spreader(userData);
    }
})