const loginValidation = require('./middlewares/loginMiddleware');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const errorMiddlewares = require('./middlewares/errorMiddleware');
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
  userController);

app.use(errorMiddlewares);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
