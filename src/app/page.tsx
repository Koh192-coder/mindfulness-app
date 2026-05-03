'use client'

import { useState, useMemo, useEffect } from 'react'
import { Post } from '@/types'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import PostCard from '@/components/PostCard'
import PostModal from '@/components/PostModal'
import PostForm from '@/components/PostForm'
import styles from './page.module.css'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [keyword, setKeyword] = useState('')
  const [activeTag, setActiveTag] = useState('')
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const fetchPosts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) {
      setPosts(data as Post[])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSearch = (kw: string, tag: string) => {
    setKeyword(kw)
    setActiveTag(tag)
  }

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchTag = activeTag === '' || post.tags.includes(activeTag)
      const matchKeyword =
        keyword === '' ||
        post.name.includes(keyword) ||
        post.body.includes(keyword) ||
        post.effect.includes(keyword) ||
        post.tags.some((t) => t.includes(keyword))
      return matchTag && matchKeyword
    })
  }, [posts, keyword, activeTag])

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <main className={styles.main}>
        <PostForm onPosted={fetchPosts} />
        <div className={styles.divider} />
        <div className={styles.sectionTitle}>
          みんなの投稿 · {filtered.length}件
        </div>
        {loading ? (
          <p className={styles.empty}>読み込み中...</p>
        ) : filtered.length === 0 ? (
          <p className={styles.empty}>該当する投稿が見つかりませんでした</p>
        ) : (
          <div className={styles.cards}>
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} onClick={setSelectedPost} />
            ))}
          </div>
        )}
      </main>
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </>
  )
}