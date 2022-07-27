import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito bacana!']);
  const [newCommentText, setNewCommentText] = useState('');
  const publishedDataFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );
  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }
  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDataFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph')
            return <p key={item.content}>{item.content}</p>;
          else if (item.type === 'link')
            return (
              <p key={item.content}>
                <a href='#'>{item.content}</a>
              </p>
            );
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu feedback'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
