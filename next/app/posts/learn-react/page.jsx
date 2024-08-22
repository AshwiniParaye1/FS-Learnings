import React from "react"

const Page = async () => {
  // const post = await getPostBySlug("learn-nextjs")

  return (
    <section className='py-24'>
      <div className='container'>
        {/* post formatter */}
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>Learn React</h1>
          <p className='text-sm font-extralight uppercase leading-snug'>
            Ashwini Paraye
          </p>
        </header>
        {/* post content */}
        {/* <main className="prose mt-12">{content}</main> */}
      </div>
    </section>
  )
}

export default Page
