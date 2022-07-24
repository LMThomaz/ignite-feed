import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://github.com/LMThomaz.png'
          />
          <div className={styles.authorInfo}>
            <strong>Leonardo Thomaz</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='24 de Julho às 11:30h' dateTime='2022-07-24 11:30:00'>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>

        <p>
          <a href='#'>#novoprojeto</a>
          {'  '} <a href='#'>#nlw</a> {'  '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
