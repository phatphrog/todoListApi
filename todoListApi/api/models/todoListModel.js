'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	title: {
		type: String,
		Required: 'Kindly enter the name of the task'
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	complete: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);
