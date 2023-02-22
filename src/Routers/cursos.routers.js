import { Router } from 'express'
const routers= Router(); 
import { getcursos, envcursos, updatecurso, deletecurso} from '../controllers/cursosControllers.js';

//obtener todos los cursos
routers.get('/cursos', getcursos)

//crear curso
routers.post('/cursos', envcursos)


//actualizar curso
routers.put('/cursos/:id', updatecurso)

//eliminar curso
routers.delete('/cursos/:id', deletecurso )

//obtetener un curso 
routers.get('/', )

export default routers
