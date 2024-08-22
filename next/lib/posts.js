import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import Newsletter from "@/app/components/Newsletter"

const rootDirectory = path.join(process.cwd(), "content")

const components = {
  h1: props => (
    <h1 className='mb-6 text-3xl font-bold text-green-500' {...props}>
      {props.children}
    </h1>
  ),
  p: props => (
    <p className='text-extralight mb-4 text-gray-500' {...props}>
      {props.children}
    </p>
  ),
  ul: props => (
    <ul className='text-extralight text-gray-500' {...props}>
      {props.children}
    </ul>
  ),
  li: props => (
    <li className='text-extralight text-gray-500' {...props}>
      {props.children}
    </li>
  ),
  Newsletter: Newsletter
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = path.join(rootDirectory, `${realSlug}.mdx`)

  let fileContents
  try {
    fileContents = fs.readFileSync(fullPath, { encoding: "utf8" })
  } catch (error) {
    console.error("Error reading the file", error)
    throw new Error("Could not read the MDX file")
  }

  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    components,
    options: {
      parseFrontmatter: true
    }
  })

  return { content, frontmatter }
}