const express = require('express')

const path = require('path')
const mongoose = require('mongoose')
const multer = require ('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOveride = require('method-override')
const bodyParser = require('body-parser')
const crypto = require('crypto');



const app = express();


 //app.use(bodyParser.json)
 app.use(methodOveride('_method')) 
 

const mongoUri ='mongodb+srv://Josh:A19zbutt@cluster0.jsw8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const conn = mongoose.createConnection(mongoUri, { useNewUrlParser: true  })

let gfs; 

conn.once('open', ()=>{
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('vids')
 
}) 




 const storage = new GridFsStorage({
  url: mongoUri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'vids'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage }); 


app.get('/', (req, res)=>{


    res.send("hi")
})



app.post('/upload', upload.single('file'), (req, res)=>{
    res.json({file: req.file})
    console.log('as')
})

const port = 5000;

app.listen(port, ()=> console.log('gooseberry'))