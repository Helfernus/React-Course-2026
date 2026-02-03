import { useRef } from 'react';

import Modal from './Modal';

const labelClasses = 'uppercase font-bold text-lg';
const inputClasses = 'p-2 bg-stone-200 rounded border-b-4 border-stone-300 focus:border-stone-600 outline-none text-stone-600 text-lg';
const inputContainer = 'flex flex-col gap-2';

export default function Adder({ onSubmit, onCancel }) {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modalRef = useRef();

    function handleSubmit() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;
        // let displayModal = 

        if (enteredTitle.trim() !== '' && enteredDescription.trim() !== '' && enteredDate.trim() !== '') {
            onSubmit({
                title: enteredTitle,
                description: enteredDescription,
                date: enteredDate,
                tasks: [],
            });
        } else {
            modalRef.current.open();
        }
    }

    return <form method="dialog" className='mx-auto flex flex-col gap-8 text-stone-500' onSubmit={handleSubmit}>
        <div className='flex justify-end gap-4'>
            <button onClick={() => onCancel(false)} className='py-2 w-24 bg-transparent font-normal text-lg text-stone-900 rounded-md'>Cancel</button>
            <button className='py-2 w-24 bg-stone-900 font-normal text-lg text-stone-300 rounded-md hover:bg-stone-700 hover:text-stone-200'>Save</button>
        </div>
        <div className={inputContainer}>
            <label className={labelClasses}>Title</label>
            <input ref={title} type="text" className={inputClasses} />
        </div>
        <div className={inputContainer}>
            <label className={labelClasses + ' text-left'}>Description</label>
            <textarea ref={description} className={inputClasses} />
        </div>
        <div className={inputContainer}>
            <label className={labelClasses}>Due Date</label>
            <input ref={date} type="date" className={inputClasses} />
        </div>
        <Modal title='Validation Error!' ref={modalRef}>Please Enter the values in all fields!</Modal>
    </form>;
}
