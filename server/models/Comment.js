import mongoose from "mongoose";

const commentSchema = new mongoose.Schema( //schema screations:
  //"Every Comment in database should follow these rules"
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog", required: true },
    name : { type: String, required: true},
    content: { type: String, required: true},
    isApproved: {type: Boolean, default: false}
  },
  {
    timestamps: true, //Automatically adds: createdAt ,updatedAt
  },
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;