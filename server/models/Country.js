// This schema will filter soccer players by country
const { Schema, model } = require('mongoose');
// const PlayerProfile = require('./PlayerProfile');

//
// const countrySchema = new Schema({
    
//     countries: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: 'PlayerProfile',
//             required: true,
//         },
//     ],
// });

const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
},
// testing to see if this helps
// {
//     toJSON: {
//       virtuals: true,
//     },
//     id: false,
//   }
);

const Country = model('Country', countrySchema);
module.exports = Country;
