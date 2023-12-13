const express = require('express');
const cors = require('cors');
const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
    express.json(),
    express.urlencoded({extended: true})
)  


require('./config/mongoose.config');  
require('./routes/indie.routes')(app);
app.listen(8000, () => {
    console.log("Server is all fired up on port 8000!")
})
