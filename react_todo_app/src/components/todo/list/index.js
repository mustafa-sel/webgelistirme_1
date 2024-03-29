import React, { useEffect, useState } from 'react'

function List({ tasks, deleteValueSelected }) {

    const [newTaskList, setNewTaskList] = useState(tasks);
    const [changeStyle, setChangeStyle] = useState({});

    useEffect(() => {
        setNewTaskList(tasks)
        //console.log(newTaskList,' *****')
    }, [tasks]);

    useEffect(() => {
        const newStyle = {};
        newTaskList.forEach((t,i) => {
            newStyle[i] = t.isChecked ? "completed" : "";
        });
        setChangeStyle(newStyle);
    }, [newTaskList]);

    const handleCheck = (taskIndex) => {
        const newTasks = [...newTaskList];
        newTasks[taskIndex].isChecked = !newTasks[taskIndex].isChecked;
        setNewTaskList(newTasks);
    }

    const deleteTask =(index,name)=>{
        
        deleteValueSelected(index);
        
        //Alert.alert('Başarılı','Silme İşlemi Gerçekleşti');
        //console.log(itemsCopy,'3333')
    }

    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {newTaskList && newTaskList.map((task, i) => (
                        <li key={i} className={changeStyle[i]}>
                            <div className="view">
                                <input id={`task-${i}`} className="toggle" type="checkbox" checked={task.isChecked} onChange={() => handleCheck(i)} />
                                <label htmlFor={`task-${i}`}>{task.taskName}</label>
                                <button className="destroy" onClick={()=> deleteTask(i, task.taskName)}></button>
                            </div>
                        </li>
                    ))}
                    { <li class="completed">
                        
                    </li> }
                    {/* { <><li>
                        <div class="view">
                            <input class="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button class="destroy"></button>
                        </div>
                    </li><li>
                            <div class="view">
                                <input class="toggle" type="checkbox" />
                                <label>Have a life!</label>
                                <button class="destroy"></button>
                            </div>
                        </li></> } */}
                </ul>
            </section>
        </div>
    )
}

export default List