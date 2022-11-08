import { useState } from 'react';
import { TasksList } from '../TasksList'
import './form.css'

interface ITask{
    id: number;
    taskName: string
}
export function Form() {
    const [task, setTask] = useState<string>("");
    const[toDoList, setToDoList] = useState<ITask[]>([]);

    //função que adiciona uma tarefa na lista
    function addTask(){
        const idRandom = (num:number) => Math.floor(Math.random() * num);
        
        const newTask = {
            id: idRandom(9999999999999),
            taskName: task
        };

        setToDoList([...toDoList, newTask]);
    }
    return (
        <>
        <header>
            <h2>To Do List React</h2>
            <input 
                type="text"
                placeholder="Digite a tarefa"
                name="task"
                className="input"
                autoComplete="off"
                value={task}
                onChange={(evt) => setTask(evt.target.value)}
            />
            <button 
                type="submit" 
                className="btn-add"
                onClick={addTask}>Criar tarefa.</button>
        </header>

        {
            toDoList.map(task =><TasksList key={task.id}
                text={task.taskName}
            />)
        }
        </>
    )
}