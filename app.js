const express = require('express');
const req = require('express/lib/request');
const User = require('./models/user');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const router = express.Router();
const listsRouter = require('./routes/lists');
const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const authMiddleware = require('./auth-middleware/auth-middleware');
const commentsRouter = require('./routes/comments');

mongoose.connect('mongodb://localhost:27017/sparta', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.json());

// get

router.get('/users/me', authMiddleware, async (req, res) => {
    const { user } = res.locals.user;
    res.send({
        user,
    });
});

router.get('/', (req, res) => {
    res.send('첫 기본 페이지 입니다..');
});

app.use('/api', express.urlencoded({ extended: false }), [
    router,
    listsRouter,
    authsRouter,
    usersRouter,
]);

// 제이슨으로 요청을 받고, 요청을 보낼수 있는 함수.

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(port, () => {
    console.log('서버가 켜졌어요!');
});
