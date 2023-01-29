import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Post 
      author="Diego Fernandes" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque commodi iste cupiditate aperiam quae blanditiis id, ratione harum, delectus, hic nobis. Deleniti illo fugiat ab obcaecati iusto sint minima?"
      />

<Post 
      author="Iago Alexandre" 
      content="Ola, novo post"
      />

    </div>
  )
}



