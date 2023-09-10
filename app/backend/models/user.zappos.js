const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;


Data = [
    {
        "facetField": "zc1",
        "values": [

            "Type"

        ]
    },

    {
        "facetField": "zc2",
        "values": [

            "Main category"
        ]
    },

	{
        "values": [

            "Subcategory"
        ]
    },

    {
        "facetField": "txAttrFacet_Gender",
        "values": [
            "Men"
        ]
    }
]