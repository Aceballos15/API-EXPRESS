import curso from '../models/cursos.js'

//controller for get all cursos
const getcursos = async (req, res)=>{
    try {
        const cursos= await curso.findAll()
        res.json(cursos)

    } catch (error) {
        res.json({"MESSAGE": "courses not contain"})
    }
}

//controller for send one course
const envcursos= async (req, res)=>{
    const {name,  description, encargado }= req.body
    if(name && description && encargado){
        try {
            const Newcurso= await curso.create({name, description, encargado})
            res.json(Newcurso)
        } catch (error) {
            res.json({"MESSAGE": "courses not contain"})
        }
    }else{
        res.json({"MESSAGE": "information isn't valid"})
    }
}

//controller to update course
const updatecurso= async (req, res)=>{
    const {id}= req.params; 
    const curs = await curso.findOne({
        where: { id }
    }); 
    if(curs){
        try {
            curs.set(req.body)
            await curs.save()
            res.json(curs)
        } catch (error) {
            res.json({"MESSAGE": "courses could not be updated"})
        }
    }else{
        res.json({"MESSAGE": "courses not found"})
    }
}

//controller to delete course
const deletecurso= async (req, res)=>{
    const { id }= req.params;
    try {
        await curso.destroy({
            where: {
                id
            }
        }); 
        res.json({"MESSAGE": "Delete a curso succesfully"});
    } catch (error) {
        res.json({"message": "no se puede eliminar"}, error)
    }
}

export {
    getcursos, 
    envcursos, 
    updatecurso, 
    deletecurso
}