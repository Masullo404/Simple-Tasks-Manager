let tasksList = []

const tasksModel = {
    CreateList(title){ 
        tasksList.push({listname:title,tasks:[]})
    },
    CreateTask(listname,task){
        this.FindListByname(listname).tasks.push(task)
    },
    ExcludeList(listname){
        tasksList = tasksList.filter(list=> list.name != listname)
    },
    ExcludeTask(listname,taskname){
        this.FindListByname(listname).tasks = this.FindListByname(listname).tasks.filter(task => task.name != taskname)
    },
    FindListByname(listname){
      return  tasksList.filter(list => list.listname == listname)[0]
    }

}
tasksModel.CreateList('Lista-exemplo')
tasksModel.CreateTask('Lista-exemplo','lavar a louça')
tasksModel.CreateTask('Lista-exemplo','Comprar leite')

module.exports = {tasksModel,tasksList}