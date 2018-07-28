const mongoose = require('mongoose');
const config = require('../config/database');

// Category schema
const CategorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

const Category = module.exports = mongoose.model('Category', CategorySchema);

// get all categories
module.exports.getCategories = function(callback){
    Category.find(callback).sort({category_name: 'asc'});
}

// save category
module.exports.addCategory = function(newCategory, callback){
    newCategory.save(callback);
}

// find category by id
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}

// delete category
module.exports.deleteCategory = function(id, callback){
    Category.findByIdAndRemove(id, callback);
}

// update category
module.exports.updateCategory = function(id, updCategory, callback){
    Category.findByIdAndUpdate(id, updCategory, {}, callback);
}

// get categories by user id
module.exports.getCategoriesByUserId = function(user_id, callback){
    const query = {user_id: user_id};
    Category.find(query, callback);
}



