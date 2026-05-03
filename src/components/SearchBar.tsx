'use client'

import styles from './SearchBar.module.css'

const PRESET_TAGS = ['呼吸', '瞑想', '食事', '運動', '自然', '睡眠', '日常', 'リラックス']

interface Props {
  keyword: string
  activeTag: string
  onSearch: (keyword: string, tag: string) => void
}

export default function SearchBar({ keyword, activeTag, onSearch }: Props) {
  const handleTagClick = (tag: string) => {
    const next = activeTag === tag ? '' : tag
    onSearch(keyword, next)
  }

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value, activeTag)
  }

  const handleSearch = () => {
    onSearch(keyword, activeTag)
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
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className={styles.btn} onClick={handleSearch}>
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
