const spreader = (data)=>{
  if (data.includes('gender:"male"'))  {
      console.log('ERROR: user male!!!!')

  }
    else if(data.includes('gender:"female"'))  {

      console.log('ERROR: user female!!!!')
  }
    else {
        console.log('ERROR: user have not gender!!!!')
  }
};

module.exports= spreader;
