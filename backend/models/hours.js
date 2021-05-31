const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoursSchema = new Schema({
	year: {
		name: {
			type: String,
			required: [true, 'Year is required']
		},
		month:{
			name: {
				type: String,
				required: [true,'Month is required']
			},
			day: {
				name:{
					type: String,
					required: [true, 'Day is required']
				},
				tyymaa:{
					name: {
						type: String,
					},
					tasks: {
						type: String,
					},
					hours: {
						type: Number,
					},
					company_id:{
						type:String,
					},
					user_id:{
						type:String,
					}
				}
			}
		}
	}
})

const Hours = mongoose.model('hours', HoursSchema);
module.exports = Hours;