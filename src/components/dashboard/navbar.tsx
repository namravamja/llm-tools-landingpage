'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, LogOut, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface NavbarProps {
  userName?: string
  userEmail?: string
  userImage?: string
  onMenuToggle?: () => void
}

export function Navbar({ userName = 'John Doe', userEmail = 'john@example.com', userImage, onMenuToggle }: NavbarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-40 w-[90vw] max-w-4xl animate-fade-in-badge">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 md:px-6 md:py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20 hover:text-white rounded-full transition-all duration-300"
            onClick={onMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-1 md:gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full text-white hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <Moon className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0 h-8 w-8 md:h-10 md:w-10 hover:bg-white/20">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarImage src={userImage} alt={userName} />
                    <AvatarFallback className="bg-white/20 text-white text-xs font-semibold">
                      {userName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <DropdownMenuLabel className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-white">{userName}</p>
                  <p className="text-xs leading-none text-white/70">{userEmail}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem onClick={() => window.location.href = '/dashboard/settings'} className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/20" />
                <DropdownMenuItem className="text-white/70 cursor-pointer hover:bg-white/20 focus:bg-white/20">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
