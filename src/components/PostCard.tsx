import { Post } from '@/types'
import styles from './PostCard.module.css'

interface Props {
  post: Post
  onClick: (post: Post) => void
  onDelete: (id: string) => void
}

export default function PostCard({ post, onClick, onDelete }: Props) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (window.confirm('この投稿を削除しますか？')) {
      onDelete(post.id)
    }
  }

  return (
    <div className={styles.card} onClick={() => onClick(post)}>
      <div className={styles.name}>{post.name}</div>
      <div className={styles.duration}>{post.duration}</div>
      <div className={styles.body}>{post.body}</div>
      <div className={styles.effect}>
        <div className={styles.effectLabel}>効果</div>
        {post.effect}
      </div>
      <div className={styles.footer}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              # {tag}
            </span>
          ))}
        </div>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          削除
        </button>
      </div>
    </div>
  )
}
