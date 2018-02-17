
module.exports = function(app){
    app.get('/usuarios', function(req, res){
        console.log('Recebida requisição de teste na porta 3000.')
        res.send('Eric seu lindo.');
    });

    app.post('/usuarios/usuario', function(req, res){
        var usuario = req.body;
        console.log('procesando uma nova requisicao de usuario.');
        usuario.status = 'CRIADO';
        usuario.data = new Date;
        res.send(usuario);
        
    });
}
