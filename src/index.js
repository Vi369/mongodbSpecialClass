import app from './app.js'
import mongoose from 'mongoose'

const port = 3000;
const dbString = 'mongodb+srv://vikas_varma:13Baap26mongo@cluster0.f60eejq.mongodb.net/';

(async()=>{
    try {
        await mongoose.connect(dbString);
        console.log("Db connected successfully !");

        app.on("error", (err)=>{
            console.log("Error: ",err)
            throw err;
        })

        const onListening = () => {
            console.log(`Example app listening on port ${port}`)
          }
        app.listen(port, onListening)
        
    } catch (error) {
        console.error("Error:",error)
        throw error;
    }
})()




