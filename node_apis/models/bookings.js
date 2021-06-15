const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    
    email: {
      type: String,
      required: true,
    },
    service : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        default : "Booked",
    },
    date: {
      type: Date,
    },
  });
  
  module.exports = mongoose.model("bookings", bookingSchema);