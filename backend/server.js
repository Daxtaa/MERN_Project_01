const express= require('express');
const app=express();
const dotenv= require('dotenv');
const notes= require ('./data/data')
dotenv.config();

app.get('/', (req,resp) => {
    resp.send('app is running....');
} )

app.get('/api/notes', (req,resp)=>{
    resp.json(notes);
})

app.get('/api/notes/:id', (req,resp)=> {
    let note= notes.find( (n) => n._id === req.params.id);
    resp.send(note);
})

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log('server is running'));
