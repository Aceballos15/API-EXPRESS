import express from 'express';
import cursosRouters from './src/Routers/cursos.routers.js';

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cursosRouters);

export default app
