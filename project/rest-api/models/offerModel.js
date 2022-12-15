const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const offerSchema = new mongoose.Schema({
    _ownerId: {
        type: ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: false
    },
    salary: {
        type: String,
        required: true
    }}, 
    { timestamps: { createdOn: 'created_on' } });

module.exports = mongoose.model('Offer', offerSchema);
