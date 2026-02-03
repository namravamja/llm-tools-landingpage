'use client'

import { ArrowRight, TrendingUp, Users, Zap, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in-hero">
      {/* Header Section */}
      <div className="space-y-3">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-balance">
          Welcome back to your{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-200">
            Dashboard
          </span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl font-light">
          Manage your projects, subscriptions, and API usage all in one place
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Total Projects Card */}
        <div className="group rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/70">Total Projects</span>
              <FolderOpen className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-white">12</p>
              <p className="text-xs text-white/60 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-white/80" />
                +2 from last month
              </p>
            </div>
          </div>
        </div>

        {/* Current Plan Card */}
        <div className="group rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/70">Current Plan</span>
              <Zap className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-white">Pro</p>
              <p className="text-xs text-white/60">Renews on Dec 15, 2024</p>
            </div>
          </div>
        </div>

        {/* API Usage Card */}
        <div className="group rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/70">API Usage</span>
              <TrendingUp className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </div>
            <div className="space-y-3">
              <p className="text-3xl md:text-4xl font-bold text-white">45%</p>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-white/60 h-full rounded-full w-[45%]" />
              </div>
              <p className="text-xs text-white/60">Of monthly quota</p>
            </div>
          </div>
        </div>

        {/* Team Members Card */}
        <div className="group rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 cursor-pointer">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/70">Team Members</span>
              <Users className="h-5 w-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-white">5</p>
              <p className="text-xs text-white/60">Active members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-white">Recent Projects</h2>
          <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'E-commerce Platform', status: 'Active', progress: 85 },
            { name: 'Mobile App Backend', status: 'In Progress', progress: 60 },
          ].map((project, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Active' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-white/60">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-white/60 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 text-left group">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white group-hover:text-white/90">+ New Project</p>
              <p className="text-sm text-white/60">Create a new project to manage</p>
            </div>
          </button>
          <button className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 text-left group">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white group-hover:text-white/90">View Documentation</p>
              <p className="text-sm text-white/60">Learn how to use the platform</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
