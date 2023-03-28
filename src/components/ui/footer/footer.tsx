import styles from './footer.module.scss';
import { FiChevronDown } from 'react-icons/fi';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.nav}>
        <li>
          <a href='#'>О нас</a>
        </li>
        <li>
          <a href='#'>Поддержка</a>
        </li>
        <li>
          <a href='#'>Советы</a>
        </li>
        <li>
          <a href='#'>Контакты</a>
        </li>
        <li>
          <a href='#'>Правила оплаты</a>
        </li>
      </ul>
      <span>Политика обработки персональных данных</span>
      <span className={styles.lang}>
        RU <FiChevronDown />
      </span>
      <span>© Company 2021</span>
    </div>
  );
};
