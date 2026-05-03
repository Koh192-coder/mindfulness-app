'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './PostForm.module.css'

interface Props {
  onPosted: () => void
}

export default function PostForm({ onPosted }: Props) {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState('')
  const [body, setBody] = useState('')
  const [effect, setEffect] = useState('')
  const [tags, setTags] = useState('')
  const [source, setSource] = useState('')
  const [sourceUrl, setSourceUrl] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!name || !duration || !body || !effect) {
      alert('名前・時間・内容・効果は必須です')
      return
    }
    setSubmitting(true)
    const { error } = await supabase.from('posts').insert({
      name,
      duration,
      body,
      effect,
      tags: tags.split(' ').filter((t) => t !== ''),
      source_type: null,
      source: source || null,
      source_url: sourceUrl || null,
    })
    if (error) {
      alert('投稿に失敗しました: ' + error.message)
    } else {
      setName('')
      setDuration('')
      setBody('')
      setEffect('')
      setTags('')
      setSource('')
      setSourceUrl('')
      onPosted()
    }
    setSubmitting(false)
  }

  return (
    <div className={styles.form}>
      <div className={styles.title}>新しいマインドフルネスを投稿</div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label}>行動の名前 *</label>
          <input className={styles.input} placeholder="例：朝の深呼吸" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>かかる時間 *</label>
          <input className={styles.input} placeholder="例：5分" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>行動の内容 *</label>
        <textarea className={styles.textarea} placeholder="どんな行動か説明してください..." value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>行動の効果 *</label>
        <textarea className={styles.textarea} placeholder="どんな効果がありましたか？" value={effect} onChange={(e) => setEffect(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>タグ（スペース区切り）</label>
        <input className={styles.input} placeholder="例：呼吸 朝 リラックス" value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>出典（任意）</label>
        <input className={styles.input} placeholder="例：○○ら (2023) 論文タイトル — ジャーナル名" value={source} onChange={(e) => setSource(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>出典URL（任意）</label>
        <input className={styles.input} placeholder="https://..." value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} />
      </div>
      <div className={styles.footer}>
        <button className={styles.submit} onClick={handleSubmit} disabled={submitting}>
          {submitting ? '投稿中...' : '投稿する'}
        </button>
      </div>
    </div>
  )
}