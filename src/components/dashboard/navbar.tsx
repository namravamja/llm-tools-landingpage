'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onMenuToggle?: () => void
}

export function Navbar({ onMenuToggle }: NavbarProps) {

  return (
    <nav className="fixed top-0 left-0 md:left-64 right-0 z-40 w-full md:w-[calc(100%-16rem)] animate-fade-in-badge">
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 h-14 md:h-16 px-6 flex items-center">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/20 hover:text-white rounded-full transition-all duration-300"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  )
}
