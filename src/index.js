import dotenv from "dotenv";
import connectDB from "./db/mongodb.js";
import { app } from "./app.js";

dotenv.config({ 
  path: "./",
});
 
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT || 8000}`);
  })
})
.catch((error)=>{
  console.log("MONGODB connection failed !!!", error);
})