import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Siderbar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
          <main>
            <Post
              author="Diego Fernandes"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque commodi iste cupiditate aperiam quae blanditiis id, ratione harum, delectus, hic nobis. Deleniti illo fugiat ab obcaecati iusto sint minima?"
            />
          </main>
        
      </div>

    </div>
  )
}



