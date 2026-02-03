'use client'

import { useState } from 'react'
import { Navbar } from '@/components/dashboard/navbar'
import { Sidebar } from '@/components/dashboard/sidebar'
import { ThemeProvider } from '@/components/common/theme-provider'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
        <Navbar 
          userName="John Doe" 
          userEmail="john@example.com"
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main content area - responsive with sidebar */}
        <main className="pt-16 md:pl-64 transition-all duration-300">
          <div className="min-h-[calc(100vh-64px)] px-4 md:px-8 py-6 md:py-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
