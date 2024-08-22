import React from 'react'

function AboutLayout({ children }) {
  return (
    <section className='py-24'>
      <div className="container border py-4 rounded">
        <h1 className='text-lg font-serif'>About Layout</h1>
      <div className='mt-6'>{children}</div>
      </div>
    </section>
  )
}

export default AboutLayout
