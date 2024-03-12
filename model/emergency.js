const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Emergency = mongoose.model('Emergency', emergencySchema);

module.exports = Emergency;
