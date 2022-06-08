const express = require('express');
const externalModule = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    helper.a();
    helper.b();
    helper.c();
    formatter.trim();
    formatter.lower();
    formatter.upper();
    res.send('My first ever api!')
});



router.get('/movies' , function(req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
     console.log(movies);
    res.send(movies.join(','));
});




router.get('/movies/:indexNumber' , function(req, res){
    let movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
        
     let index = req.params.indexNumber
     if(index<movies.length){
     movie = movies[index];
    
     }else{
     movie = ("Not a valid index")
     }
     res.send(movie)
   }
    
);





router.get('/film', function (req, res) {
    let movieObj= [ {
         id: 1,
         name: "The Shining"
        }, {
         id: 2,
         name: "Incendies"
        }, {
         id: 3,
         name: "Rang de Basanti"
        }, {
         id: 4,
         name: "Finding Nemo"
        },{
            id:5,
            name:"Harry Potter",
        },{
            id:6,
            name:"Big City"
        }]
        
     res.send(movieObj)
 });
 
 router.get('/film/:filmId', function (req, res) {
    let movieObj= [ {
     id: 1,
     name: "The Shining"
    }, {
     id: 2,
     name: "Incendies"
    }, {
     id: 3,
     name: "Rang de Basanti"
    }, {
     id: 4,
     name: "Finding Nemo"
    },{
        id:5,
        name:"Harry Potter",
    },{
        id:6,
        name:"Big City"
    }]
 
         let filmIndex =req.params.filmId;
         
         if(filmIndex>movieObj.length || filmIndex === 0){
             res.send({Result : "No movie exists with this index"})
 
         }else{
             res.send(movieObj[filmIndex-1])
         }
         
      
  });



































//split the array into 4 equal size
 router.get('/hello', function (req, res) {
const split = lodash.chunk(
    [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"

    ],
    3
);
console.log(split);


 // tail return 9 element

 const tail = lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);

console.log(tail);

//merge and remove duplicate values
const merge = lodash.union(
    [1, 2, 3],
    [2, 3, 4, 5],
    [4, 5, 6, 7],
    [7, 8, 9, 5]
);
console.log(merge);

//divide into key value pairs
const movieDetails = lodash.fromPairs([
    ["horror", "the shining"],
    ["Drama", "titanic"],
    ["Thriller", "shutter Island"],
    ["fantast", "Pans Labyrinth"]
]);
console.log(movieDetails);
res.send("Hello There!");

 });


 module.exports = router;
