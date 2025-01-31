import { useContext } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/TaskContext";
   
const ToDoScreen = () => {

    const {taskList}=useContext(TaskContext);  

    const navigate = useNavigate();

    return (

        <>
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                    <button 
                        onClick={(e) => {
                            navigate("/add-task");
                        }}
                        className="ui secondary button"
                    >
                        Add Task
                    </button>
                    <section> 
                        <div className="ui cards">
                            {
                            taskList.map((task, index) =>( 
                                <Task task={task} key={task.taskId} />
                             ))}
                        </div>
                    </section>
                </div>
                {/* <AddTask onSubmit={addNewTask} />     */}
            </div>
           
        </>

        );
    };
        

export default ToDoScreen;