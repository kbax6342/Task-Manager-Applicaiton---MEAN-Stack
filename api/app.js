const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const {
    mongoose
} = require('./db/mongoose.js')


//Load in the mogoose models
const {
    List,
    Task
} = require('./db/models')


app.use(bodyparser.json())


//ROUTE HANDLERS


//LIST ROUTES

/**
 * Get  lists
 * Purpose: Get lists
 * 
 */

app.get('/lists', (req, res) => {
    //We want to return an array of all the list in the database
    List.find({}).then((lists) => {
        res.send(lists)
    }).catch((e) => {
        console.log("There was an error")
    })
})
/**
 * Post  lists
 * Purpose: To post lists
 *
 */


app.post('/lists', (req, res) => {
    //We want to creat an ew list and return the nest list document back to the user 
    //The list informaiton (fields) will be passed in via the JSON reques t body

    let title = req.body.title;

    let newList = new List({
        title
    });

    newList.save().then((listDoc) => {
        res.send(listDoc)
    })
})
/**
 * Update lists
 * Purpose: Update a specified list
 *
 */

app.patch('/lists/:id', (req, res) => {
    //We want to update the specified list (llist doucment with id in teh url) with the new values specified in the JSON body of the request
})
/**
 * Delete lists
 * Purpose: Delete a specified list
 *
 */

app.delete('/lists/id:', (req, res) => {
    //We want to delete the specified list (document with id in the URL)
})

app.listen(3000, () => {
    console.log("Server is running")
})