export function Post(props) {
  const { author, content } = props;
  return (
    <div>
      <p>Author: {author}</p>
      <p>Content: {content}</p>
    </div>
  )
}

