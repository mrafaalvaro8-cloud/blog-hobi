import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        category: matterResult.data.category,
        excerpt: matterResult.data.excerpt,
        content: matterResult.content,
      }
    })

  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostData(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
    }
  } catch {
    return null
  }
}

export function getCategories(): string[] {
  const posts = getSortedPostsData()
  return Array.from(new Set(posts.map((post) => post.category)))
}

export function getPostsByCategory(category: string): Post[] {
  return getSortedPostsData().filter((post) => post.category === category)
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase().trim()
  if (!q) return []
  return getSortedPostsData().filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.content.toLowerCase().includes(q)
  )
}
