import styles from './modal.module.scss';
import { PropsWithChildren } from 'react';

interface ModalProps extends PropsWithChildren {
  close(): void;
}

export const Modal = ({ close, children }: ModalProps) => {
  return (
    <div
      className={styles.container}
      onClick={e => {
        e.stopPropagation();
        close();
      }}
    >
      <div
        className={styles.modal}
        onClick={e => {
          console.log('r');
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
