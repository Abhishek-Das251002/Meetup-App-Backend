const {makeDbConnection} = require("./events.dbConnection")
const Event = require("./events.model")

const fs = require("fs")
makeDbConnection()

const jsonData = fs.readFileSync("./events.json", "utf-8")
const eventsData = JSON.parse(jsonData)

function seedEventData(){
    try{
    for(const event of eventsData){
        const newEvent = new Event({
            name: event.name,
            type: event.type,
            date: event.date,
            startingTime: event.startingTime,
            endingTime: event.endingTime,
            hostName: event.hostName,
            eventDetails: event.eventDetails,
            eventImgUrl: event.eventImgUrl,
            additionalInfo: event.additionalInfo,
            tags: event.tags,
            address: event.address,
            price: event.price,
            speakers: event.speakers,            
        })
        newEvent.save()
    }
    }catch(error){
        console.log("error occured while seeding data", error)
    }
}


seedEventData()
