const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'this category alredy exist!'],
  },
  link: {
    type: String,
  },
  categoryImage: {
    type: String,
  },
});

const Category = mongoose.model('Category', categorySchema);

categorySchema.pre('save', async function (next) {
  this.link = 'hamza';
  console.log(this.link);
  next();
});

module.exports = Category;
