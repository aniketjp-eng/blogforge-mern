import express from "express";
import "dotenv/config"; //Loads environment variables from a .env file.
import cors from "cors";
import connectDb from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import aiRouter from "./routes/aiRoute.js";

const app = express();

await connectDb();
//Middleware -->
app.use(cors());
//app.use(cors()); allows requests from different origins to access the Express server.

app.use(express.json());
//converts json formate data into js objects

app.use("/api/ai", aiRouter);


// Routes
app.get(
  "/",
  (
    req,
    res, //home route
  ) => res.send("Route path -- API is Working"),
);
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
