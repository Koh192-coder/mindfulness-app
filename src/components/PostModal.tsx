'use client'

import { useEffect } from 'react'
import { Post } from '@/types'
import styles from './PostModal.module.css'

interface Props {
  post: Post | null
  onClose: () => void
}

const SOURCE_LABEL: Record<string, string> = {
  paper: '論文',
  book: '書籍',
  website: 'ウェブサイト',
}

export default function PostModal({ post, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!post) return null

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="閉じる">
          ✕
        </button>

        <div className={styles.name}>{post.name}</div>
        <div className={styles.duration}>{post.duration}</div>

        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              # {tag}
            </span>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <div className={styles.sectionLabel}>行動の内容</div>
          <div className={styles.sectionBody}>{post.body}</div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <div className={styles.sectionLabel}>行動の効果</div>
          <div className={`${styles.sectionBody} ${styles.effectBox}`}>
            {post.effect}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <div className={styles.sectionLabel}>出典</div>
          <div className={styles.sourceBox}>
            {!post.source ? (
              <span className={styles.sourceNone}>出典なし</span>
            ) : (
              <>
                <span className={styles.sourceBadge}>
                  {post.sourceType ? SOURCE_LABEL[post.sourceType] : '参考'}
                </span>
                {post.sourceUrl ? (
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    {post.source}
                  </a>
                ) : (
                  <p className={styles.sourceText}>{post.source}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
