import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/LMThomaz.png' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Thomaz</strong>
              <time
                title='24 de Julho às 11:30h'
                dateTime='2022-07-24 11:30:00'>
                Cerca de 1h atrás
              </time>
              <button title='Deletar comentário'>
                <Trash size={20} />
              </button>
            </div>
          </header>
          <p>Muito bom Devon, parabéns</p>
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