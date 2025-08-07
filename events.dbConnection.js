const mongoose = require("mongoose")
require("dotenv").config()

const connectionUri = process.env.MONGODB

const makeDbConnection = async () => {
    await mongoose
    .connect(connectionUri)
    .then(() => {console.log("successfully connected to database.")})
    .catch((error) => {console.log("An error occured while fetching data.", error)})
}

module.exports = {makeDbConnection}