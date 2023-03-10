import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedrowiskutzki.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Wiskutzki</strong>
              <time title="11 de Maio às 15:44h" dateTime="2023-01-02 15:13:30">
                Cerca de um hora 1h atrás
              </time>
            </div>
            <button
              onClick={() => handleDeleteComment()}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
