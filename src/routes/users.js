const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const loginValidator = require("../validations/loginValidator");
const userCheck = require('../middlewares/userCheck');
const upload = require('../middlewares/upload');
const loginProcess = require('../controllers/users/loginProcess');
const notUserCheck = require('../middlewares/notUserCheck');
const { arrayValidaciones, validateCreateForm } = require('../middlewares/validacionesRegister');
const arrayValidationUpdate  = require('../validations/validationUpdate');
const userTurnos = require("../controllers/users/userTurnos")
const userMedicos = require ("../controllers/users/userMedicos")
const userEspecialidades = require ("../controllers/users/userEspecialidades")
const userEstudiosClinicos = require ("../controllers/users/userEstudiosClinicos")
const userTurnosEstudiosClinicos = require ("../controllers/users/userTurnosEstudiosClinicos")



/* GET users listing. */
router.get('/login', loginProcess.showLoginPage);
router.post('/login', loginValidator, loginProcess.processLogin);
router.get('/register' ,notUserCheck,usersController.register)
router.get('/turnos', userTurnos)
router.get('/medicos', userMedicos)
router.get('/especialidades', userEspecialidades)
router.get('/estudiosClinicos', userEstudiosClinicos)
router.get('/turnosEstudiosClinicos', userTurnosEstudiosClinicos)





router.post('/registerOk',arrayValidaciones,validateCreateForm,usersController.newUser);
router.get('/logOut', usersController.logOut);
router.get('/profile/', userCheck, usersController.profile);
router.put('/update/',upload.single('image'), arrayValidationUpdate, usersController.update);

module.exports = router;