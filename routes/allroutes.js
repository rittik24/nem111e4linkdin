const express = require("express");
const{register,login}= require("../control/user")
const{getPosts,addPosts,updatedPost,deletePost, updatePost}=require("../control/linkdin")
const {authentication}= require("../middleware/authenticate")

const router=express.Router();

router.post("/register",register)
router.post("/login",login)

router.get("/",getPosts)
router.get("/add",addPosts)
router.get("/update",updatePost)
router.get("/delete",deletePost)


module.exports={
    router
}