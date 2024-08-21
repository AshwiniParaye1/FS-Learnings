import React from "react"
import Link from "next/link"
import NavLink from "@components/ui/NavLink"

function Header() {
  return (
    <>
      <header className='mb-6 bg-gray-100 p-4'>
        <nav className='container'>
          <ul className='flex gap-3'>
            <li>
              <NavLink href='/'>Home</NavLink>
            </li>
            <li>
              <NavLink href='/about'>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
