import { Post } from '@/types'
import styles from './PostCard.module.css'

interface Props {
  post: Post
  onClick: (post: Post) => void
}

export default function PostCard({ post, onClick }: Props) {
  return (
    <div className={styles.card} onClick={() => onClick(post)}>
      <div className={styles.name}>{post.name}</div>
      <div className={styles.duration}>{post.duration}</div>
      <div className={styles.body}>{post.body}</div>
      <div className={styles.effect}>
        <div className={styles.effectLabel}>効果</div>
        {post.effect}
      </div>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            # {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
