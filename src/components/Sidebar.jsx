import styles from "./Siderbar.module.css";
import { PencilLine } from "phosphor-react"

export function Siderbar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/IagoAndrade16.png" alt="" />

        <strong>Iago Alexandre</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}