// This schema will filter soccer players by country
const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
    country: {
        type: String,
        required: true,
    },
});