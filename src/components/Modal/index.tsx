import { useRef, useEffect, ReactNode, MouseEvent } from 'react';
import { X } from 'phosphor-react';

interface PropTypes {
  setModal: (value: boolean) => void;
  title: string;
  children: ReactNode;
}

/**
 * Archive: src/components/Modal/index.tsx
 *
 * Description: Contains the Modal to access the given component according to each page.
 *
 * Date: 2022/03/09
 *
 * Author: Rey
 */

export const Modal = ({ setModal, title, children }: PropTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function closeModal(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      setModal(false);
    }
  }

  useEffect(() => {
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape') {
          setModal(false);
        }
      },
      false,
    );
  }, []);

  return (
    <div
      className="z-50 h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-end md:items-center bg-dark-50"
      ref={modalRef}
      onClick={closeModal}
    >
      <div className="w-screen max-h-[85vh] p-5 absolute bottom-0 flex flex-col justify-start items-center bg-body-light-100 rounded-t-xl animate-scaleIn overflow-hidden md:w-[auto] md:max-h-[95vh] md:p-10 md:relative md:rounded-xl">
        <div className="w-full mb-10 flex justify-between items-center text-2xl text-ellipsis md:mb-7">
          <span className="text-dark-200 font-medium">{title}</span>
          <X
            weight="bold"
            className="w-8 h-8 p-0.5 ml-3 top-3 right-3 rounded bg-icon text-icon-close hover:bg-opacity-50 hover:text-icon-dark cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        {children}
      </div>
    </div>
  );
};