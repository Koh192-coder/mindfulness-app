'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import PostForm from '@/components/PostForm'
import styles from './page.module.css'

export default function PostPage() {
  const router = useRouter()

  const handlePosted = () => {
    router.push('/')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.backRow}>
          <button className={styles.backBtn} onClick={() => router.push('/')}>
            ← 一覧に戻る
          </button>
        </div>
        <PostForm onPosted={handlePosted} />
      </main>
    </>
  )
}
