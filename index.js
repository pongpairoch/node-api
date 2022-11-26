coust express = require('experss')
coust app = express()
const PORT = 4000
app.listen(PORT, () =>{

    console.log(`API Listening on PORT ${PORT}`)
})


app.get('/',(req,res) =>{
    res.send('This is my api')

})
app.get('/about',(req,res) =>{
    res.send('This is my about')

})

module.exports = app