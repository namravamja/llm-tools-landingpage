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
      <div className="min-h-screen bg-black">
        <Navbar 
          userName="John Doe" 
          userEmail="john@example.com"
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main content area - responsive with sidebar */}
        <main className="pt-24 md:pt-32 md:pl-72 transition-all duration-300 px-4 md:px-6">
          <div className="min-h-screen py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
