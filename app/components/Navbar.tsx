"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="serch-container flex shrink-0 w-full gap-2 sm:w-fit">
        <Button className="source-code flex items-center gap-2" onClick={() => {
          router.push('https://github.com')
        }}>Source Code</Button>
      </div>
    </div>
  )
}

export default Navbar