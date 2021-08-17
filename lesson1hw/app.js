const fs = require('fs');
const spreader = require('./spreader') ;

//
// const users = require('./users') ;
//
// for( const user of  users)  {
//     fs.writeFile(`./in/${user.name}.txt`,`{name:"${user.name}",gender:"${user.gender}"}`,
//    (err)=>{
//      if (err){
//             console.log(err);
//             }
//     });
// };

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
                    spreader(data.toString(),file);
                }
            })
        })
    }
});










        //   for (const fileName of files ){
        //     fs.readFile(`./in/${fileName}`,(err,data )=>{
        //         if (err){
        //             console.log(err);
        //         }
        //         else{
        //              spreader(data.toString());
        //         }
        //     });
        // }




//
//     }
// });




