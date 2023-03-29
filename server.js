const express = require('express')
const app = express()
const jwt = require('./users/jwt');
const cors = require('cors')
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200  
  }
app.use(cors(corsOptions))
/*app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:8000"],
    })
  );*/

app.use(express.json());
app.listen(8000, () => {
    console.log('Server started!')
  })
  
  app.get("/", (req, res) => {
    res.json({ message: "Welcome ." });
  });
  const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/users', require('./users/users.controller'));
app.use(jwt());



/*app.route('/api/users').post((req, res) => {
  res.send(201, req.body)
})*/


  
 