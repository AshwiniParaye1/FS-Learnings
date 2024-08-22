import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const rootDirectory = path.join(process.cwd(), "content")

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "")

  const fullPath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, { encoding: "utf8" })

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true
    }
  })

  return { content, frontmatter }
}
