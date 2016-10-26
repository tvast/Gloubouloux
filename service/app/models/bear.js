var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema = new Schema({
  name:    String,
	photo:    String,
	description:    String,
	amis: [],
	message:[],
  age:     { type: Number, min: 18, max: 65 },
	updated: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Bear', BearSchema);
