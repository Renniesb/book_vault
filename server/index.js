const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

//Middleware: Add middleware for parsing JSON requests
app.use(express.json());

//API Routes
app.get('/api/books',(req, res)=>{
    //Implement your route logic here
    res.json({message: 'API endpoint for books'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});