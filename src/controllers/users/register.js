const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const db = require("../../database/models");


// Validacion , Creacion de Usuario en la base de datos con sus datos correspondientes 
// redireciona al usuario si el registro es exitoso o si hay problemas
module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, lastName, email, password } = req.body;
    db.User.create({
      name: name.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password: hashSync(password, 10),
      cobertura: cobertura.trim(),
      dni: dni.trim(),

      roleId: 2,
    })
      .then((user) => {
        console.log(user);
        db.Address.create({
          userId: user.id,
        }).then(() => {
          return res.redirect("/");
        });
      })
      .catch((error) => console.log(error));
  } else {
    return res.render("register", {
      old: req.body,
      errors: errors.mapped(),
    });
  }
};
