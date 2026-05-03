'use client'

import { useState } from 'react'
import styles from './SearchBar.module.css'

const PRESET_TAGS = ['呼吸', '瞑想', '食事', '運動', '自然', '睡眠', '日常', 'リラックス']

type Props = {
  onSearch: (kw: string, tag: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState('')
  const [activeTag, setActiveTag] = useState('')

  const handleTagClick = (tag: string) => {
    const next = activeTag === tag ? '' : tag
    setActiveTag(next)
    onSearch(keyword, next)
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    onSearch(e.target.value, activeTag)
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>みんなのマインドフルネスを探す</p>
      <div className={styles.searchRow}>
        <input
          className={styles.input}
          placeholder="キーワードで検索..."
          value={keyword}
          onChange={handleKeywordChange}
          onKeyDown={(e) => e.key === 'Enter' && onSearch(keyword, activeTag)}
        />
        <button className={styles.btn} onClick={() => onSearch(keyword, activeTag)}>
          検索
        </button>
      </div>
      <div className={styles.tagsRow}>
        <span
          className={`${styles.tag} ${activeTag === '' ? styles.active : ''}`}
          onClick={() => handleTagClick('')}
        >
          # すべて
        </span>
        {PRESET_TAGS.map((tag) => (
          <span
            key={tag}
            className={`${styles.tag} ${activeTag === tag ? styles.active : ''}`}
            onClick={() => handleTagClick(tag)}
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
