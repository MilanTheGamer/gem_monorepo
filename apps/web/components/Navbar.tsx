'use client'

import React from 'react'
import { Button } from 'ui/components/ui/button'
import { useTheme } from 'ui/hooks/useTheme'

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <>
      <Button onClick={() => setTheme('dark')}>DarkMode</Button>
      <Button onClick={() => setTheme('light')}>Light Mode</Button>
    </>
  )
}
