import { useRef } from 'react';

const transparentButtonClasses = 'py-2 w-24 bg-transparent text-sm md:font-medium md:text-lg rounded-md';

export default function ProjectEditor({ selectedProjectIndex, projects, onDelete, onTaskAdd, onTaskRemove }) {
    const taskRef = useRef();

    const date = new Date(projects[selectedProjectIndex].date);
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const tasks = (projects[selectedProjectIndex].tasks != null || projects[selectedProjectIndex].tasks != '') && projects[selectedProjectIndex].tasks;
    let taskItems;

    function handleTaskAdd() {
        if (taskRef.current.value != '') {
            onTaskAdd(selectedProjectIndex, taskRef.current.value);
            taskRef.current.value = '';
        }
    }

    if (tasks.length > 0) {
        taskItems = (<ul className="flex flex-col gap-3">
            {tasks.map((item, index) => <li key={index} className="flex bg-stone-200 rounded-md w-full py-8 px-5 justify-between">
                <div className="font-semibold text-sm md:text-base">{item}</div>
                <button className="font-semibold text-sm md:text-base" onClick={() => onTaskRemove(selectedProjectIndex, index)}>Clear</button>
            </li>)}

        </ul>);
    } else {
        taskItems = <div className="font-semibold text-xs md:text-base">This project does not have any tasks yet.</div>;
    }

    return <section className="text-stone-600 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
            <div className="flex mt-6 justify-between items-center">
                <h1 className='font-bold text-lg md:text-3xl'>{projects[selectedProjectIndex].title}</h1>
                <button className={transparentButtonClasses} onClick={onDelete}>Delete</button>
            </div>
            <div className="text-stone-400 text-sm md:text-base font-normal">{month} {day}, {year}</div>
            <div><p className="whitespace-pre-wrap text-wrap text-sm md:text-base">{projects[selectedProjectIndex].description}</p></div>
        </div>
        <hr className="border-2 border-stone-300 rounded" />
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-base md:text-2xl">Tasks</h2>
            <div className="flex gap-1 md:gap-3 items-center">
                <input ref={taskRef} type="text" className="p-1 bg-stone-200 rounded w-28 md:w-72 text-sm md:text-base" />
                <button className={transparentButtonClasses} onClick={handleTaskAdd}>Add Task</button>
            </div>
            {taskItems}
        </div>
    </section>;
}
