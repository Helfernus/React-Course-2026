export const headingLevel2Class = 'font-bold md:text-2xl';

export default function Sidebar({ projects, onEdit, selected, onProjectSelect }) {
    function handleSelect(project, index) {
        console.log(project, index);
        onProjectSelect(index);
    }

    return <aside className="flex flex-col gap-8 mt-10 w-1/3 md:w-80 rounded-tr-2xl p-2 md:p-9 bg-stone-950 text-stone-300">
        <h2 className={headingLevel2Class + ' tracking-wide uppercase mt-6'}>Your Projects</h2>
        <button onClick={() => onEdit(true)} className="bg-stone-700 py-2 px-2 md:py-2 md:px-4 rounded-lg font-normal w-fit text-sm md:text-lg hover:bg-stone-600 hover:text-stone-50">+ Add Project</button>
        <ol className="flex flex-col gap-4 text-stone-500 md:px-2 text-lg">
            {projects.map((project, index) => <li className={`px-2 py-1 rounded hover:cursor-pointer hover:bg-stone-900 text-sm md:text-base ${(selected === index) && ' bg-stone-800 text-stone-400'}`}
                key={index}
                onClick={() => handleSelect(project, index)}>
                {project.title}
            </li>)}
        </ol>
    </aside>;
}
