const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    message: { type: String },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Contact', ContactSchema);