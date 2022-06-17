import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json())
const user = [];
const tweets = [];

app.post("/sign-up", (req,res) => {
    user.length = 0;
    user.push(req.body);
    res.send('OK');
})
app.post("/tweets", (req,res) => {
    const obj = { 'avatar':user[0].avatar, 'username':req.body.username, 'tweet':req.body.tweet}
    tweets.push(obj);
    console.log(user[0].avatar)
    res.send('OK');
})
app.get("/tweets", (req,res) => {
    const lastTen = [];
    
    for(let i = tweets.length - 1 ; i >= tweets.length - 10 && i >= 0 ; i--){
        lastTen.push(tweets[i]);
    }
    res.send(lastTen);  
})
app.listen(5000);