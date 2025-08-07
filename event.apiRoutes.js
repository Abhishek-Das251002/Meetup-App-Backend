const {makeDbConnection} = require("./events.dbConnection")
const Event = require("./events.model")

const express = require("express")
const app = express()

app.use(express.json())

const cors = require("cors")
const corsOptions = {
    origin: "*", 
    credentials: true,
}
app.use(cors(corsOptions))

makeDbConnection()


const readAllEvents = async () => {
    try{
        const allEvents = await Event.find()
        return allEvents
    }catch(error){
        console.log("error occured while fetching events", error)
    }
}

app.get("/events", async (req, res) => {
    try{
        const allEventsDetails = await readAllEvents();
        if(allEventsDetails){
            res.status(200).json(allEventsDetails)
        }else{
            res.status(404).json({error: "events not found."})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
})


const readEventById = async (eventId) => {
    try{
        const selectedEvent = await Event.findById(eventId)
        return selectedEvent
    }catch(error){
        console.log(error)
    }
}

app.get("/events/:id", async (req, res) => {
    try{
        const myEvent = await readEventById(req.params.id)
        res.status(200).json(myEvent)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})