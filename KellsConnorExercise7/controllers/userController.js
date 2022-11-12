const model = require('../models/user');

exports.new = (req, res)=>{
    res.render('./user/new');
};

// Simalr to create method from demo
exports.create = (req, res, next)=>{
    let user = new model(req.body);
    user.save()
    .then(user=> res.redirect('/users/login'))
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
            req.flash('error', err.message);  
            return res.redirect('/users/new');
        }
        if(err.code === 11000) {
            req.flash('error', 'Email adress has been used');  
            return res.redirect('/users/new');
        }
        next(err);
    }); 
};

// Simalr to login method from demo
exports.userLogin = (req, res, next) => {
    res.render('./user/login');
}

// Simalr to login method from demo
exports.login = (req, res, next)=>{
    let email = req.body.email;
    let password = req.body.password;
    model.findOne({email: email})
    .then(user => {
        if (user) {
            user.comparePassword(password)
            .then(result=>{
                if(result) {
                    req.session.user = user._id;
                    req.flash('success', 'You have successfully logged in');
                    res.redirect('/users/profile');
            } else {
                req.flash('error', 'wrong password');      
                res.redirect('/users/login');
            }
            })     
        } else {
            req.flash('error', 'wrong email address');      
            res.redirect('/users/login');
        }    
    })
    .catch(err => next(err));
};

// Silimar to how a story would be displayed
exports.profile = (req, res, next)=>{
    let id = req.session.user;
    model.findById(id) 
    .then(user=>res.render('./user/profile', {user}))
    .catch(err=>next(err));
};

exports.logout = (req, res, next)=>{
    req.session.destroy(err=>{
        if(err) 
           return next(err);
       else
            res.redirect('/');  
    });
};