const fs = require('fs');

const spreader = (data,path)=>{
  if (data.includes('gender:"male"'))  {
    fs.rename(`./in/${path}`,`./2000/${path}`,(err)=>{
    if (err) {
        console.log(err);
    }
});
  }
    else if(data.includes('gender:"female"'))  {
          fs.rename(`./in/${path}`,`./1800/${path}`,(err)=>{
          if (err) {
              console.log(err);
          }
      });
 }
    else {
        console.log('ERROR: user has no gender!!!!');
  }
};

module.exports= spreader;
