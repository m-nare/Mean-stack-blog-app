const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const config = require('../config/database');

// create category
router.post('/create', (req, res, next) => {
    let newCategory = new Category({
        category_name: req.body.category_name,
        user_id: req.body.user_id
    });

    Category.addCategory(newCategory, (err, category) => {
        if(err){
            res.json({success: false, msg: 'Failed to create category'});
        } else {
            res.json({success: true, msg: 'Category created'});
        }
    });
});

// get all categories
router.get('/', (req, res, next) => {
    Category.getCategories((err, categories) => {
        if(err) throw err;
        if(!categories){
            return res.json({success: false, msg: 'No categories found'});
        };
        res.json(categories);
    });
});

// find category by id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Category.getCategoryById(id, (err, category) => {
        if(err) throw err;
        if(!category){
            return res.json({success: false, msg: 'Category not found'});    
        }
        res.json(category);
    });
});


// delete category
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Category.deleteCategory(id, (err, category) => {
        if(err) throw err;
        if(!category){
            return res.json({success: false, msg: 'Category not found'});
        }
        res.json({success: true, msg: 'Category deleted'});
    });
});


// update category
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    var category = req.body;
    var updCategory = {};

    if(category.category_name){
        updCategory.category_name = category.category_name;
    }

    if(!updCategory){
        res.json({success: false, msg: 'Bad data'});
    }

    Category.updateCategory(id, updCategory, (err, category) => {
        if(err) throw err;
        if(!category){
            return res.json({success: false, msg: 'Category not found'});
        }
        res.json({success: true, msg: 'Category updated'});
    });
});

// find categories by user id
router.get('/user/:id', (req, res, next) => {
	const id = req.params.id;
	Category.getCategoriesByUserId(id, (err, categories) => {
		if(err) throw err;
		if(!categories){
			return res.json({success: false, msg: 'Categories by user not found'});
		}
		res.json(categories);
	});
});

// export categories.js
module.exports = router;
