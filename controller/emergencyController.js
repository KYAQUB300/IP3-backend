const Emergency = require('../model/emergency');
const catchAsync = require('../utils/catchAsync.js');

const addEmergency = catchAsync(async (req, res) => {
    console.log(req.body)
    const emergency = new Emergency({
        name: req.body.name,
        contactNumber: req.body.contactNumber,
        user: req.body.user._id // assuming req.user contains user information after authentication
    });

    await emergency.save();
    res.status(200).json('Emergency contact added successfully.');
});

const getEmergencyContacts = catchAsync(async (req, res) => {
    const emergencies = await Emergency.find({ user: req.params.id });
    res.status(200).json(emergencies);
});

const getEmergencyContactsById = catchAsync(async (req, res) => {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
        return res.status(404).json({ message: 'Emergency contact not found.' });
    }
    res.status(200).json(emergency);
});


const updateEmergency = catchAsync(async (req, res) => {
    const emergency = await Emergency.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(emergency);
});

const deleteEmergency = catchAsync(async (req, res) => {
    await Emergency.findByIdAndDelete(req.params.id);
    res.status(200).json('Emergency contact deleted successfully.');
});

module.exports = {
    addEmergency,
    getEmergencyContacts,
    updateEmergency,
    deleteEmergency,
    getEmergencyContactsById
};
