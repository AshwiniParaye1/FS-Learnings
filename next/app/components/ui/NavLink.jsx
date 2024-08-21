"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

function NavLink({ href, ...rest }) {
  const pathname = usePathname()

  const isActive = href === pathname

  return (
    <>
      <Link href={href} {...rest} className={isActive ? "text-cyan-500" : ""} />
    </>
  )
}

export default NavLink
