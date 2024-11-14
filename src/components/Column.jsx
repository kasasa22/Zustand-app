import './Column.css'
import Task from './Task'



export default function Column({state}){


    return <div className="Column">
        <p> {state}</p>
        <Task title='Todo' />
       
    </div>

}   