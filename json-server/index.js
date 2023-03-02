const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const middlewares = jsonServer.defaults({ noCors: true });
server.use(middlewares);

server.use(cors());

// artificial delay
server.use(async (req, res, next) => {
  await new Promise(() => {
    setTimeout(res, 800);
  });
  next();
});

// user authorization
// server.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ message: 'AUTH ERROR' });
//   }
//   next();
// });

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

// Login endpoint
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
  const { users } = db;

  const userFromDb = users.find(user => user.username === username && user.password === password);

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: 'AUTH_ERROR' });
});

// Use default router
server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
