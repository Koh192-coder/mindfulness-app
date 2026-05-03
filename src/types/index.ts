export type SourceType = 'paper' | 'book' | 'website' | null

export interface Post {
  id: string
  name: string
  duration: string
  body: string
  effect: string
  tags: string[]
  sourceType: SourceType
  source: string | null
  sourceUrl: string | null
  createdAt: string
}
