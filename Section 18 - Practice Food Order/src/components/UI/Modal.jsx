import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }
    // else {
    //   dialog.current.close();
    //   console.log('Oh no! It\'s Happening!');
    // }

    return () => modal.close();
  }, [open]);

  return createPortal(<dialog ref={dialog} onClose={onClose} className={`modal ${className}`}>
    <h2>{title}</h2>
    {children}
  </dialog>, document.getElementById('modal'));
}
