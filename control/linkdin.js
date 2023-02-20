const { LinkdinModel } = require("../models/linkdin.model")


const getPosts = async (req, res) => {
    try {
        const allPosts = await LinkdinModel.find();
        console.log("Welcom to Linkdin")
        res.send("Welcome to Linkdin")
    } catch (err) {
        console.log(err)
        res.send("Something went wrong")
    }
}

const addPosts = async (req, res) => {
    const payload = req.body;
    try {
        const data = LinkdinModel(payload)
        await data.save();
        console.log("Successfully added posts")
        res.send("Posts added successfully")
    } catch (err) {
        console.log(err)
        res.send("Something went wrong")
    }
}

const updatePost = async (req, res) => {
    const payload = req.body;
    const { _id } = req.params;
    try {
        await LinkdinModel.findByIdAndUpdate({ _id }, payload)
        console.log("Successfully updated")
        res.send("Successfully updated")
    } catch (err) {
        console.log(err);
        res.send("Posts not updated")
    }
}

const deletePost = async (req, res) => {
    const { _id } = req.params;
    try {
        await LinkdinModel.findByIdAndDelete({ _id })
        console.log("Successfully deleted")
        res.send("Successfully deleted")
    } catch (err) {
        console.log(err);
        res.send("Posts not deleteed")
    }
}

module.exports={getPosts,addPosts,updatePost,deletePost}