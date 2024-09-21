const main = {
    index:(req, res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contacts:(req, res) =>{
        res.render('contacts');
    },
    cart:(req, res) =>{
        res.render('cart');
    },
    profile:(req, res) =>{
        res.render('about');
    },
};

module.exports = main;