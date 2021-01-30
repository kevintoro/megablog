const express = require('express');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const multer = require('multer');
const MySQLStore = require('express-mysql-session')(session);

const indexRoute = require('./routes/index.routes');
const userRoute = require('./routes/user.routes');

//init
const app = express();
require('./lib/passport');

//settings
const PORT = process.env.PORT || 3500;
app.set('port', PORT);
app.set("views", path.join(__dirname, 'views'));
const viewsDir = app.get('views');

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(viewsDir, 'layouts'),
  partials: path.join(viewsDir, 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + path.extname(file.originalname));
  }
});

app.use(multer({ storage }).single('uploadImage'));
// app.use(passport.initialize());
// app.use(passport.session());

//routes
app.use('/', indexRoute);
app.use('/user', userRoute);

//public
app.use(express.static(path.join(__dirname, 'public')));

//start
app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
})