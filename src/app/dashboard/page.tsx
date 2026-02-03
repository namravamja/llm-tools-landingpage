'use client'

import { ArrowRight, TrendingUp, Users, Zap, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-balance">
          Welcome back to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Dashboard</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Manage your projects, subscriptions, and API usage all in one place
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Total Projects Card */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Total Projects</h3>
              <FolderOpen className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">12</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-500" />
                +2 from last month
              </p>
            </div>
          </div>
        </div>

        {/* Subscription Card */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Current Plan</h3>
              <Zap className="h-5 w-5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">Pro</p>
              <p className="text-xs text-muted-foreground">Renews on Dec 15, 2024</p>
            </div>
          </div>
        </div>

        {/* API Usage Card */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">API Usage</h3>
              <TrendingUp className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-3">
              <p className="text-3xl md:text-4xl font-bold">45%</p>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-cyan-400 h-full rounded-full w-[45%]" />
              </div>
              <p className="text-xs text-muted-foreground">Of monthly quota</p>
            </div>
          </div>
        </div>

        {/* Team Members Card */}
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Team Members</h3>
              <Users className="h-5 w-5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">3</p>
              <p className="text-xs text-muted-foreground">Active collaborators</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="md:col-span-2 relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
          <h2 className="text-xl font-bold mb-6">Recent Projects</h2>
          <div className="space-y-3">
            {[
              { name: 'LLM API Integration', status: 'Active', updated: '2 days ago' },
              { name: 'Dashboard Analytics', status: 'In Progress', updated: '5 days ago' },
              { name: 'Authentication Module', status: 'Active', updated: '1 week ago' },
            ].map((project, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="flex-1">
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.updated}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-gradient-to-r from-primary/80 to-cyan-400/80 hover:from-primary hover:to-cyan-400" variant="default">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/10 hover:border-white/20">
                <FolderOpen className="mr-2 h-4 w-4" /> New Project
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/10 hover:border-white/20">
                <Zap className="mr-2 h-4 w-4" /> Upgrade Plan
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/10 hover:bg-white/10 hover:border-white/20">
                <Users className="mr-2 h-4 w-4" /> Invite Members
              </Button>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-cyan-500/10 backdrop-blur-xl p-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Ready to scale?</h3>
              <p className="text-sm text-muted-foreground">
                Upgrade to Enterprise for unlimited API calls and priority support.
              </p>
              <Button className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90" size="sm">
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
