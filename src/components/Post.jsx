import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react";

// estado são variáveis que eu quero que o react monitore

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(
    [
      1,
      2
    ]
  )

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1])
  }
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

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(paragraph => {
          if(paragraph.type === 'link') {
            return (
              <a href="#">
                <p>{paragraph.content}</p>
              </a>
            )
          }
          return (
            <p>{paragraph.content}</p>
          )
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  )
}