var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var MessageSchema = new Schema({
	// `title` must be of type String
	title: String,
	// `body` must be of type String
	body: String,
	reported: Boolean,
	briny_deeps: Boolean,
	seen_count: Number
});

// This creates our model from the above schema, using mongoose's model method
var Message = mongoose.model("Message", MessageSchema);

// Export the Note model
module.exports = Message;
