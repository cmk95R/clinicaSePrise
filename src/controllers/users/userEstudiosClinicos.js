const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Leer los archivos JSON
    const estudiosClinicos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'estudiosClinicos.json'), 'utf8'));

    // Renderizar la vista 'especialidades' y pasar los datos JSON
    return res.render('userEstudiosClinicos', {
        estudiosClinicos: estudiosClinicos.estudiosClinicos
    });
};
