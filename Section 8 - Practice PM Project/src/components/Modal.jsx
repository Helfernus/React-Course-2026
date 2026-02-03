import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ title, ref, children, ...props }) {
    const dialog = useRef();

    function handleClose() {
        if (dialog.current) {
            dialog.current.close();
        }
    }

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    })
    );
    return createPortal(<dialog ref={dialog} {...props} className="text-stone-700 px-8 py-10 backdrop:backdrop-blur backdrop:backdrop-brightness-75 rounded-xl text-sm shadow-md" onClose={handleClose}>
        <div className="flex flex-col gap-4 text-center">
            <h2 className="md:text-xl text-base font-medium">{title}</h2>
            {children}
            <button className="block bg-stone-700 text-stone-400 py-2 px-4 rounded-lg font-normal w-fit text-base m-auto mt-2 hover:bg-stone-600 hover:text-stone-50" onClick={handleClose}>Okay</button>
        </div>
    </dialog>, document.getElementById('modal-root'));
}
