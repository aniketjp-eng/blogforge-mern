import fs from 'fs'  //File System module.
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
// import { Transform } from 'stream';

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog,
    );
    const imageFile = req.file;
    //check  if all field are present
    if (!title || !subTitle || !description || !category || !isPublished) {
      return res.json({ success: false, message: "Missing required fields" });
    }
    const fileBuffer = fs.readFileSync(imageFile.path)
 //Reads uploaded image from local storage into memory as a buffer (binary data).   

    //upload Image to ImageKit
    // const response = await imagekit.files.upload({
        // file: fileBuffer,
        // fileName: imageFile.originalname, 
        //multer is the middleware that handles file uploads in Express.js.
        // folder: "/blogs"
    // })
    const response = await imagekit.files.upload({
  file: fileBuffer.toString("base64"),
  fileName: imageFile.originalname,
  folder: "/blogs",
});

    //optimized through imageKit URL transformation
    // imagekit.url()
    // const optimizedImageUrl = imagekit.baseURL({
    const optimizedImageUrl = imagekit.url({
        path: response.filePath,
        transformation : [
            {quality : 'auto'}, //Auto compression
            {format: 'webp'},  //Convert to modern format
            {width: '1280'}   // Width resizing
        ]
    });
    const image = optimizedImageUrl;
    await Blog.create({title, subTitle,description,category, image, isPublished})

    res.json({
        success: true,
        message: "Blog added sucessfully"
    })
  } catch (error) {
    res.json({
        success: false,
        message: error.message
    })
  }
};
