'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderOpen,
  CreditCard,
  Zap,
  Settings,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Projects',
    href: '/dashboard/projects',
    icon: FolderOpen,
  },
  {
    label: 'Subscriptions',
    href: '/dashboard/subscriptions',
    icon: CreditCard,
  },
  {
    label: 'Usage',
    href: '/dashboard/usage',
    icon: Zap,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-20"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-24 h-[calc(100vh-96px)] w-64 transition-all duration-300 z-30 overflow-y-auto md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 border-l-0 border-t-0 rounded-r-3xl m-2 mr-0 h-full p-4 md:p-6 space-y-4 flex flex-col">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between md:hidden">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link key={item.href} href={item.href} onClick={onClose}>
                  <Button
                    className={cn(
                      'w-full justify-start gap-3 transition-all duration-300 rounded-xl text-base md:text-sm',
                      isActive
                        ? 'bg-white text-slate-900 font-semibold hover:bg-slate-50'
                        : 'text-white/80 hover:text-white hover:bg-white/20'
                    )}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-white/20 pt-4">
            <p className="text-xs text-white/60 font-medium">Contentlytics v1.0</p>
          </div>
        </div>
      </aside>
    </>
  )
}
