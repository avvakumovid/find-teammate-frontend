import styles from './Layout.module.scss'
import { PropsWithChildren } from 'react';

interface Layout extends PropsWithChildren {
  
}

export const Layout = ({children}: Layout) => {
  return (
    <div>login</div>
  )
}