const  express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({origin:'http://localhost:3000'}));
app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);