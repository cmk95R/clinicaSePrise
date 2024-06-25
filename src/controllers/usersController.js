const userEstudiosClinicos = require('./users/userEstudiosClinicos');

module.exports = {
    login : (req,res) => {
        return res.render('login');
    },
    loginProcess : require('./users/loginProcess'),
    showLoginPage : require('./users/loginProcess'),
    logOut : require('./users/logOut'),
    register : (req,res) => {
        return res.render('register');
    },
    registerOk : (req,res) => {
        return res.render('registerOk');
    },
    update : require('./users/update'),
    profile : require('./users/profile'),

    newUser: require('./users/createUser'),
    userTurnos:require("./users/userTurnos"),
    userMedicos:require("./users/userMedicos"),
    userEspecialidades:require("./users/userEspecialidades"),
    userEstudiosClinicos:require("./users/userEstudiosClinicos"),
    userTurnosEstudiosClinicos:require("./users/userTurnosEstudiosClinicos")
    


}
