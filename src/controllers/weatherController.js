
let axios = require("axios")

const getWeather = async function (req, res) {
    
  try{
    let apikey = req.query.appid;
    let location = req.query.city;
    let options = {
        method : "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}` ,
    };
    let result = await axios(options);
    res.status(200).send({data: result.data});
  }catch(err){
    console.log(err);
    res.status(500).send({msg: err.message})
  }
};


const getTemp = async function (req, res) {
    
    try{
      let apikey = req.query.appid;
      let location = req.query.city;
      let options = {
          method : "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
      };
      let result = await axios(options);
      res.status(200).send({data: {city:location, temperature: result.data.main.temp}});
    }catch(err){
      console.log(err);
      res.status(500).send({msg:err.message})
    }
  };



  const getCityTemp = async function (req, res) {
    
    try{
        let cities = [
            "Bengaluru",
            "Mumbai",
            "delhi",
            "Kolkata",
            "Chennai",
            "London",
            "Moscow"
        ];
        let arr = [];
        for(let i = 0; i<cities.length; i++){
      let apikey = req.query.appid;
      let location = cities[i];
      let options = {
          method : "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`,                                                                                                                  
      };
      let result = await axios(options);
      let obj = {city : location, temperature: result.data.main.temp}
      arr.push(obj)
    }
    arr.sort((a,b)=>a.temperature - b.temperature)
      res.status(200).send({data: arr});
    }catch(err){
      console.log(err);
      res.status(500).send({msg:err.message})
    }
  };
  
  
  
  module.exports.getWeather = getWeather;
  module.exports.getTemp = getTemp;
  module.exports.getCityTemp = getCityTemp;

