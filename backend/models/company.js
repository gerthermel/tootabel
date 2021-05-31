const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name:{
		type: String,
		required: [true, 'Company Name is required']
	},
	workers: [{
		worker_id: {
			type: String,
			required: [true, 'Worker id is required']

		},
		permissions: {
			type: Array
		},
	}]
})

const Company = mongoose.model('companies', CompanySchema);
module.exports = Company;