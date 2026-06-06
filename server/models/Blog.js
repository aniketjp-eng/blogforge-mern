import mongoose from "mongoose";

const blogSchema = new mongoose.Schema( //schema screations:
//"Every blog in database should follow these rules"
  {
    title: { type: String, require: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isPublished: { type: Boolean, required: true },
  },
  {
    timestamps: true, //Automatically adds: createdAt ,updatedAt
  },
);

const Blog = mongoose.model("blog", blogSchema);
//Blog = tool to work with blogs collection

export default Blog;
