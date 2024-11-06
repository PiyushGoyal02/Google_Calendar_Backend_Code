const GoogleCalendarModel = require("../Model/GoogleCalendarModel");

// Create a new Google Calendar event
exports.GoogleCalendraEventCreate = async (req, res) => {
    try {
        const { start, end, description } = req.body;

        if (!start || !end || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const googleEventCreate = await GoogleCalendarModel.create({
            start,
            end,
            description
        });

        return res.status(201).json({
            success: true,
            message: "Event created successfully",
            data: googleEventCreate
        });

    } catch (error) {
        console.error("Detailed Error:", error);
        return res.status(500).json({
            success: false,
            message: "Cannot add event. Please try again later.",
            error: error.message
        });
    }
};


// Google Calendar Updated Code 
exports.GoogleCalendraEventUpdate = async (req, res) => {
    try {
        const { id } = req.params; 
        const { start, end, description } = req.body; 

        // Find the event by ID and update it
        const updatedEvent = await GoogleCalendarModel.findByIdAndUpdate(
            id,
            { 
                start: start, 
                end: end,    
                description: description
            },
            { new: true } 
        );

        
        if (!updatedEvent) {
            return res.status(404).json({
                success: false,
                message: "Event not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Event updated successfully",
            data: updatedEvent,
        });

    } catch (error) {
        console.error("Detailed Error:", error);
        return res.status(500).json({
            success: false,
            message: "Cannot update event. Please try again later.",
            error: error.message,
        });
    }
}


// Google Event Delete
exports.GoogleCalendarEventDelete = async (req, res) => {
    try{

        const { id } = req.body;

        if (!id){
            return res.status(401).json(
                {
                    sucess:false,
                    message:"Id Is Not Available"
                }
            )
        }

        const EventDelete = await GoogleCalendarModel.findByIdAndDelete(
            {
                _id:id
            }
        )

        if (!EventDelete) {
            return res.status(404).json({
                success: false,
                message: "Event not found in the database"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Event deleted successfully from Google Calendar and MongoDB"
        });

    }catch(error){
        console.log(error)
        return res.status(501).json(
            {
                success:false,
                message:"Cannot delete event. Please try again later."
            }
        )
    }
}