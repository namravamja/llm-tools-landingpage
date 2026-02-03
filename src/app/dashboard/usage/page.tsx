'use client'

import { TrendingUp, Zap, Database, Clock } from 'lucide-react'

export default function UsagePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">API Usage & Analytics</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Monitor your API usage and resource consumption in real-time
        </p>
      </div>

      {/* Usage Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* API Requests */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">API Requests</h3>
              <Zap className="h-5 w-5 text-primary/60 hover:text-primary transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">24.5K</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> 12% increase this week
              </p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-cyan-400 h-full rounded-full w-[65%]" />
            </div>
            <p className="text-xs text-muted-foreground">65% of 40K monthly limit</p>
          </div>
        </div>

        {/* Bandwidth */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Bandwidth Used</h3>
              <Database className="h-5 w-5 text-cyan-400/60 hover:text-cyan-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">45.2GB</p>
              <p className="text-xs text-muted-foreground">Of 500GB monthly limit</p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-400 to-primary h-full rounded-full w-[9%]" />
            </div>
            <p className="text-xs text-green-400">9% utilized</p>
          </div>
        </div>

        {/* Storage */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Storage Used</h3>
              <Database className="h-5 w-5 text-primary/60 hover:text-primary transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">12.8GB</p>
              <p className="text-xs text-muted-foreground">Of 100GB limit</p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-cyan-400 h-full rounded-full w-[13%]" />
            </div>
            <p className="text-xs text-green-400">13% utilized</p>
          </div>
        </div>

        {/* Uptime */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">Uptime</h3>
              <Clock className="h-5 w-5 text-green-400/60 hover:text-green-400 transition-colors" />
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold">99.99%</p>
              <p className="text-xs text-green-400">4 minutes downtime this month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
        <h2 className="text-xl font-bold mb-6">Cost Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'API Requests', cost: '$12.50', usage: '24.5K requests' },
            { label: 'Bandwidth', cost: '$4.20', usage: '45.2GB used' },
            { label: 'Storage', cost: '$2.56', usage: '12.8GB used' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-2xl font-bold mb-2">{item.cost}</p>
              <p className="text-xs text-muted-foreground">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Alerts */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
        <h2 className="text-xl font-bold mb-6">Usage Alerts</h2>
        <div className="space-y-3">
          {[
            { metric: 'API Calls', threshold: '80%', enabled: true },
            { metric: 'Storage', threshold: '90%', enabled: false },
            { metric: 'Bandwidth', threshold: '75%', enabled: true },
          ].map((alert) => (
            <div key={alert.metric} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div>
                <p className="font-medium">{alert.metric}</p>
                <p className="text-sm text-muted-foreground">Alert at {alert.threshold}</p>
              </div>
              <div className={`h-3 w-3 rounded-full ${alert.enabled ? 'bg-green-500' : 'bg-gray-500/50'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
