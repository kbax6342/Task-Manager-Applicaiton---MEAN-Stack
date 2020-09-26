//This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect to MongoDB successfully');
}).catch((e) => {
    console.log('Error while attempting to connect to mongodb')
    console.log(e)
})

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = {
    mongoose
}