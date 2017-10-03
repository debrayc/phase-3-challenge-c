const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000

app.get( '/api/shout/:word', ( req, res ) => {
    let word = req.params.word.toUpperCase()
    res.status(200).set( 'Content-Type', 'text/plain' ).send( word + "!!!" )
})

app.post( '/api/array/merge/', bodyParser.json(), ( req, res ) => {
    let body = req.body
    let array1 = body.array1
    let array2 = body.array2
    let newArray = []
    if ( Array.isArray(array1) && Array.isArray( array2 )) {
        let mergedArray = array1.forEach(( index  ) => {
            array2[index - 1] ? newArray.push(([array1[index - 1], array2[index - 1]])) :
            newArray.push(array1[index - 1]);
            return newArray
        })
        res.set( 'Content-Type', 'application/json' ).status(200).json({"result": newArray.join().split(',') })
    } else {
        res.set( 'Content-Type', 'application/json' ).status(400).send(`{"error": Both keys in request body must be of type Array.}`)
    }
})

app.listen( port, () => console.log( `LIVE on localhost:` + port ))

