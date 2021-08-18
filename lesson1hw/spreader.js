const fs = require('fs');

const spreader = (data,fileName)=>{
  if (data.gender==='male' )  {
      if (data.age<20) {
          reMovFunction(fileName,`./manYounger20/`)
      }
     else
     { reMovFunction(fileName,`./manOlder20/`)}
  }
    else if (data.gender==='female' )  {
      if (data.age<20) {
          reMovFunction(fileName,`./womanYounger20/`)
      }
      else
      { reMovFunction(fileName,`./womanOlder20/`)}
  }
    else {
        console.log('ERROR: user has no gender!!!!');
  }
};
//////////////////
const  reMovFunction = (oldFileName,newPath,)=>{
    fs.rename(`./in/${oldFileName}`,`${newPath}/${oldFileName}`,(err)=>{
        if (err) {
            console.log(err);
        }
    });
}
////////////////
module.exports= spreader;
