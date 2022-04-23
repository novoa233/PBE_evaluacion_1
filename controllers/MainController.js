const utils = require('../resources/utils')

const getIndex = (request,response) =>{
    response.render('index');
}
const setLogin  = (request,response) =>{
    const toSend = utils.limpiarRequest({
        usuario: request.body.usuario,
        password: request.body.password
    })
    response.render('login',{
                                locals: toSend
                            });
}

const postTriangulo = (request,response) =>{
    response.render('triangulo')
}
const postCuadrado = (request,response) =>{
    response.render('cuadrado')
}

const postCircunferencia = (request,response) =>{
    response.render('circunferencia')
}

module.exports = {
    getIndex,
    setLogin,
    postTriangulo,
    postCuadrado,
    postCircunferencia,
}