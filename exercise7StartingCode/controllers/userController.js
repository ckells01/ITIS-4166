const model = require('../models/user');

exports.new = (req, res)=>{
    res.render('./user/new');
};

// exports.create = (req, res, next)=>{
//     //res.send('Created a new story');
//     let user = new model(req.body);//create a new story document
//     user.save()//insert the document to the database
//     .then(user=> res.redirect('/users/login'))
//     .catch(err=>{
//         if(err.name === 'ValidationError' ) {
//             req.flash('error', err.message);  
//             return res.redirect('/users/new');
//         }

//         if(err.code === 11000) {
//             req.flash('error', 'Email has been used');  
//             return res.redirect('/users/new');
//         }
        
//         next(err);
//     }); 
// };
