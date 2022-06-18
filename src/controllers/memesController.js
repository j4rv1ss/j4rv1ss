let axios = require("axios")

const getAllMemes = async function (req, res) {
    
    try{
     
      let options = {
          method : "get",
          url: `https://api.imgflip.com/get_memes` ,
      };
      let result = await axios(options);
      console.log(result)
      res.status(200).send(result.data);
    }catch(err){
      console.log(err);
      res.status(500).send({msg: err.message})
    }
  };
  

  const postMemes = async function (req, res) {
    
    try{
       let memeid= req.query.template_id;
       let text0= req.query.text0;
       let text1= req.query.text1;
       let username = req.query.username;
       let password = req.query.password

      let options = {
          method : "get",
          url: `https://api.imgflip.com/caption_image?template_id=${memeid}&text0=${text0}&text1=${text1}&username=${username}&password=${password}` ,
      };
      let result = await axios(options);
      console.log(result)
      res.status(200).send({data: result.data});
    }catch(err){
      console.log(err);
      res.status(500).send({msg: err.message})
    }
  };
  

  module.exports.getAllMemes = getAllMemes
  module.exports.postMemes = postMemes