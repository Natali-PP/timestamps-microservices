const express= require('express')
const app = express()

// si me llega una dataString vacía - user story 3

app.get('/api/timestamp', (req, res) => {
    res.send({
        'unix': new Date().getTime(),
        'utc': new Date().toUTCString()
    })
})

app.get('/api/timestamp/:dateString?', (req,res) => {
    const dateString = req.params.dateString
    let date

    if (!isNaN(dateString)) {
        date = new Date(parseInt(dateString))
    }else{
        date = new Date(dateString)
    }

    if (date.toUTCString()== "Invalid Date"){
        res.send({
          "error":"Invalid Date"
        })
      }  else{
        res.send({
          'unix': date.getTime(),
          'utc': date.toUTCString()
        })
      }
})

//Sirvo los estilos
app.use(express.static('public'))

//sirvo el HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen('8000', () =>{
    console.log('listening to port 8000')
} )

