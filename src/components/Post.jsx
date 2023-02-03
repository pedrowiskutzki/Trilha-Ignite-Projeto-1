import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/110680950?v=4"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Wiskutzki</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 15:44h" dateTime="2023-01-02 15:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 👋 </p>
        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da{" "}
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a> <a href="">#nlw</a>{" "}
          <a href="">#rockseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
