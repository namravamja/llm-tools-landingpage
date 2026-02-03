'use client'

import { Navbar } from '@/components/dashboard/navbar'
import { Sidebar } from '@/components/dashboard/sidebar'
import { ThemeProvider } from '@/components/common/theme-provider'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar userName="John Doe" userEmail="john@example.com" />
        <Sidebar />
        
        {/* Main content area - responsive with sidebar */}
        <main className="pt-16 pl-64 transition-all duration-300 lg:pl-64 md:pl-20 sm:pl-0">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
