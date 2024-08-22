import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const rootDirectory = path.join(process.cwd(), "content")

const components = {
    h1: (props) => (
        <h1 className="text-3xl font-bold text-green-500 mb-6" {...props} >
            {props.children}
        </h1>
    ),
    p: (props) => (
        <p className="mb-4 text-extralight text-gray-500" {...props} >
            {props.children}
        </p>
    ),
    ul: (props) => (
        <p className="text-extralight text-gray-500" {...props} >
            {props.children}
        </p>
    ),
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "")

  const fullPath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, { encoding: "utf8" })

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    components,
    options: {
      parseFrontmatter: true
    }
  })

  return { content, frontmatter }
}
