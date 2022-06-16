import express from 'express';

const app = express();

const users = [];

app.post("/sign-up", (req,res) => {
    console.log(req);
})

app.listen(5000);