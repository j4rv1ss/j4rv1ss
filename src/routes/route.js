const express = require('express');
const router = express.Router();
 const AuthorModel= require("../models/authorModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BookModel= require("../models/bookModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)



router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", BookController.createAuthor)

router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)
router.get("/authorOfBook", BookController.authorOfBook)




module.exports = router;