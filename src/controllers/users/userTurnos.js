const fs = require('fs');
const path = require('path');
const medicos = 
module.exports = (req, res) => {
    // Leer los archivos JSON
    const medicos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'medicos.json'), 'utf8'));
    const especialidades = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'especialidades.json'), 'utf8'));

    // Renderizar la vista 'userTurnos' y pasar los datos JSON
    return res.render('userTurnos', { medicos: medicos.medicos, especialidades: especialidades.especialidades });
};
