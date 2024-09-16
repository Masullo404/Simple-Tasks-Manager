const tasksList = []

const tasksModel = {
    CreateList(title){ 
        tasksList.push({listname:title})
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
        tasksList.filter(list => list.name == listname)[0]
    }

}

module.exports = {tasksModel,tasksList}