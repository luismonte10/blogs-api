const loginValidation = require('./middlewares/loginMiddleware');
const loginController = require('./controllers/loginController');
const { createUser, getUsers, getUserById } = require('./controllers/userController');
const { createCategory, getCategories } = require('./controllers/categoryController');
const { nameValidation } = require('./middlewares/categoryMiddleware');
const errorMiddlewares = require('./middlewares/errorMiddleware');
const authToken = require('./middlewares/authToken');
const {
  displayNameValidation,
  emailValidation,
  passwordValidation,
} = require('./middlewares/userMiddlewares');

require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.post('/login', loginValidation, loginController);

app.post('/user',
  displayNameValidation,
  emailValidation,
  passwordValidation,
  createUser);
app.get('/user', authToken, getUsers);
app.get('/user/:id', authToken, getUserById);

app.post('/categories', authToken, nameValidation, createCategory);
app.get('/categories', authToken, getCategories);

app.use(errorMiddlewares);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
