const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('json.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/login', (req, res) => {
    const { username, password } = req.query; // Alterado de req.body para req.query
    const db = router.db; // Access the database

    const users = db.get('usuario')
    .find({ email: username, senha: password })
    .value();

    if (users) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});

