import { headingLevel2Class } from './Sidebar';
import Clipboard from '../assets/no-projects.png';

export default function EmptyProject({ onEdit }) {
    return <section className='flex flex-col gap-6 mx-auto my-44 w-fit max-w-96 h-fit text-center text-stone-600'>
        <img src={Clipboard} alt='Clipboard Logo' className='h-28 w-28 object-cover m-auto' />
        <h2 className={headingLevel2Class}>No Project Selected</h2>
        <p className='text-stone-500 font-light text-lg'>Select a project or get started with a new one</p>
        <button onClick={onEdit} className='bg-stone-700 text-stone-400 py-2 px-4 rounded-lg font-normal w-fit text-lg m-auto mt-2 hover:bg-stone-600 hover:text-stone-50'>Create new project</button>
    </section>;
}
