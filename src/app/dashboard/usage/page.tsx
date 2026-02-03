'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function UsagePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usage</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your API usage and quotas
        </p>
      </div>

      {/* Monthly Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Usage</CardTitle>
          <CardDescription>Current billing cycle: Feb 1 - Feb 29, 2024</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* API Calls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">API Calls</p>
                <p className="text-sm text-muted-foreground">Requests to your API</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">4.5M / 10M</p>
                <p className="text-sm text-muted-foreground">45% used</p>
              </div>
            </div>
            <Progress value={45} className="h-2" />
          </div>

          {/* Storage */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Storage</p>
                <p className="text-sm text-muted-foreground">Database and files</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">28 GB / 100 GB</p>
                <p className="text-sm text-muted-foreground">28% used</p>
              </div>
            </div>
            <Progress value={28} className="h-2" />
          </div>

          {/* Bandwidth */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Bandwidth</p>
                <p className="text-sm text-muted-foreground">Data transfer</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">850 GB / 1000 GB</p>
                <p className="text-sm text-muted-foreground">85% used</p>
              </div>
            </div>
            <Progress value={85} className="h-2" />
          </div>

          {/* Concurrent Connections */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Concurrent Connections</p>
                <p className="text-sm text-muted-foreground">Simultaneous users</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">1,250 / 5,000</p>
                <p className="text-sm text-muted-foreground">25% used</p>
              </div>
            </div>
            <Progress value={25} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Usage Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Last 30 Days</CardTitle>
          <CardDescription>Your usage trend over the past month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Daily Average */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Avg. Daily API Calls</p>
                <p className="text-2xl font-bold mt-2">150,000</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Avg. Daily Storage Used</p>
                <p className="text-2xl font-bold mt-2">0.93 GB</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Peak Connections</p>
                <p className="text-2xl font-bold mt-2">2,840</p>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
              <p className="text-muted-foreground">Usage chart will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Alerts</CardTitle>
          <CardDescription>Set alerts to notify you when usage reaches certain thresholds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { metric: 'API Calls', threshold: '80%', enabled: true },
            { metric: 'Storage', threshold: '90%', enabled: false },
            { metric: 'Bandwidth', threshold: '75%', enabled: true },
          ].map((alert) => (
            <div key={alert.metric} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="font-medium">{alert.metric}</p>
                <p className="text-sm text-muted-foreground">Alert at {alert.threshold}</p>
              </div>
              <div className={`h-3 w-3 rounded-full ${alert.enabled ? 'bg-green-500' : 'bg-gray-300'}`} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
