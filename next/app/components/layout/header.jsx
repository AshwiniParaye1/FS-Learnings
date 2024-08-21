import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
      <header className='mb-6 bg-gray-200 p-4'>
        <nav className='container'>
          <ul className='flex gap-3'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
