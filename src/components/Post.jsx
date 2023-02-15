import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post({ author, content, publishedAt}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>
              {author.name}
            </strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13" dateTime="2022-05-11 00:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋
        </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">
            👉 {' '} jane.design/doctorcare
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}