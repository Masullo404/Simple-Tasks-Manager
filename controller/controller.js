let {tasksModel,tasksList} = require("../models/task")

const responses = {
    index:(req,res)=>{
        res.render('homepage')
    },
    listas:(req,res)=>{
        res.render('Listas',{tasksList:tasksList})
    },
    nova_lista:(req,res)=>{
        res.render('NovaLista')
    },
    nova_lista_post:(req,res)=>{
        const nova_lista = req.body.newlist
        tasksList.push({listname:nova_lista,tasks:[]})
        res.render('NovaLista')
    },
    newList:(req,res)=>{
        const nova_lista = req.body.newlist
        tasksList.push({listname:nova_lista,tasks:[]})
        res.render('Listas',{tasksList:tasksList})
    },
    listname:(req,res)=>{
        const listname = req.params.listname
        const list = tasksList.filter((list) => list.listname == listname)[0]
        res.render('Lista',{list:list})
    },
    nova_tarefa:(req,res)=>{
        const listname = req.params.listname
        const new_task = req.body.new_task_input
        tasksList.filter(list => list.listname == listname)[0].tasks.push(new_task)
        res.render('Lista',{list:tasksList.filter(list => list.listname == listname)[0]})
    },
    excluir_lista:(req,res)=>{
        const listname = req.params.listname
        tasksList = tasksList.filter((lista)=>lista.listname != listname)
        res.redirect('/Listas')
    },
    excluir_tarefa:(req,res)=>{
        const taskname = req.params.taskname
        const listname = req.params.listname    
        tasksList.filter((list)=> list.listname == listname)[0].tasks = tasksList.filter((list)=> list.listname == listname)[0].tasks.filter(task => task !=taskname)
        res.redirect(`/Listas/${listname}`)
    }
}

module.exports = responses