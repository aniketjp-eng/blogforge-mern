import jwt from "jsonwebtoken";
import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

export const adminLogin = async (req, res) => {


  try {
    const { email, password } = req.body;
        console.log("Email from frontend:", email);
console.log("Password from frontend:", password);

console.log("ENV Email:", process.env.ADMIN_EMAIL);
console.log("ENV Password:", process.env.ADMIN_PASSWORD);
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({createdAt: -1});
    res.json({ success: true, blogs});
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export  const getAllComments = async(req, res) => {
  try {
    const comments = await Comment.find({}).sort({createdAt: -1});
    res.json({success: true, comments})
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const getDashBoard = async(req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5);
    const blogs = await Blog.countDocuments();
    const comments = await Comment.countDocuments();
    const drafts = await Blog.countDocuments({isPublished: false});
    const dashboardData = {
      blogs, comments, drafts, recentBlogs
    }
        res.json({success: true, dashboardData})
  } catch (error) {
        res.json({ success: false, message: error.message });
  }
}

export const deleteCommentById = async(req, res) => {
     try {
      const {id} = req.body;
      await Comment.findByIdAndDelete(id);
      res.json({success: true, message: "Comment deleted successfully"})
     } catch (error) {
      res.json({ success: false, message: error.message });
     }
}

export const approveCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        res.json({success: true, message:"Comment approved successfully" })
    } catch (error) {
       res.json({success: false, message: error.message}) 
    }
}