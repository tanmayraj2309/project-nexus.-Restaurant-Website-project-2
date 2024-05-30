const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema( {
    username : {
        type:String,
        required:true
    },

    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type: String,
        required:true
    },
    confirmpassword : {
        type: String,
        required:true
    }
})

// now we need to create a collection

const Register = mongoose.model("Register", employeeSchema);

module.exports = Register;