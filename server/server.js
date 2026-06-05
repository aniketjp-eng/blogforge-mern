import express from "express";
import 'dotenv/config'
import cors from 'cors'

const app = express();
//Middle Ware -->
app.use(cors());
app.use(express.json()); 


// Routes 
app.get('/', (req, res) => {
      res.send("Route path -- API is Working")
})
const port =  proces.env.port || 3000;

app.listen(port, () => {
    console.log('Server is running on port'+ port);
})

export default app;