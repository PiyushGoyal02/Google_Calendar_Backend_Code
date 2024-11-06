const express = require("express")
const route = express.Router();

const { GoogleCalendraEventCreate, GoogleCalendraEventUpdate, GoogleCalendarEventDelete } = require("../Controllers/GoogleCalendraEventCreate")
route.post("/eventcreate", GoogleCalendraEventCreate)
route.put("/eventupdate", GoogleCalendraEventUpdate)
route.delete("/eventdelete", GoogleCalendarEventDelete)

module.exports = route;