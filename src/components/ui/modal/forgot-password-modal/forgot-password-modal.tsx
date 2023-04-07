import { GoMail } from 'react-icons/go';
import { Input } from '../../inputs/input/input';
import { Modal } from '../modal';
import styles from './forgot-password-modal.module.scss';
import { useState } from 'react';
import { Button } from '../../button/button';

interface ForgotPasswordModalProps {
  close(): void;
}

export const ForgotPasswordModal = ({ close }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState('');
  return (
    <Modal close={close}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Я не помню пароль</h1>
        <p className={styles.description}>
          Введи свой email и мы вышлем тебе инструкции по изменению пароля
        </p>
        <div className={styles.buttons}>
          <Input
            type='email'
            placeholder='Введите электронную почту'
            leftIcon={GoMail}
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <Button
            text='Запросить новый пароль'
            size='large'
            type='contained'
            onClick={() => {
              console.log('Запросить новый пароль');
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
