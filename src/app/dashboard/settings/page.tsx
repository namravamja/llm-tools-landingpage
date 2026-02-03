'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Lock, Bell, Palette, Shield } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Settings & Preferences</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Manage your account, security, and preferences
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent border border-white/10 p-1 h-auto">
          <TabsTrigger 
            value="account"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-cyan-400/80 data-[state=active]:text-white rounded-lg border border-white/10 data-[state=active]:border-white/20 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="preferences"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-cyan-400/80 data-[state=active]:text-white rounded-lg border border-white/10 data-[state=active]:border-white/20 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Preferences</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-cyan-400/80 data-[state=active]:text-white rounded-lg border border-white/10 data-[state=active]:border-white/20 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-cyan-400/80 data-[state=active]:text-white rounded-lg border border-white/10 data-[state=active]:border-white/20 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-foreground">Full Name</Label>
                  <Input 
                    id="fullname" 
                    placeholder="John Doe" 
                    defaultValue="John Doe"
                    className="bg-white/10 border-white/20 hover:border-white/30 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    defaultValue="john@example.com"
                    className="bg-white/10 border-white/20 hover:border-white/30 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company"
                    className="bg-white/10 border-white/20 hover:border-white/30 focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="bg-white/10 border-white/20 hover:border-white/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90">
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Display Preferences</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme" className="text-foreground">Theme</Label>
                <Select defaultValue="dark">
                  <SelectTrigger id="theme" className="bg-white/10 border-white/20 hover:border-white/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background/80 backdrop-blur-xl border-white/10">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language" className="text-foreground">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" className="bg-white/10 border-white/20 hover:border-white/30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background/80 backdrop-blur-xl border-white/10">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div>
                  <p className="font-medium">Compact Mode</p>
                  <p className="text-sm text-muted-foreground">Reduce spacing in the interface</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Password
                </h3>
                <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  Change Password
                </Button>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="font-semibold flex items-center gap-2 mb-4">
                  <Shield className="h-4 w-4" /> Two-Factor Authentication
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enhance your account security with two-factor authentication
                </p>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <p className="font-medium">2FA Status</p>
                    <p className="text-sm text-green-400">Enabled</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="font-semibold mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  {[
                    { device: 'Chrome on MacOS', location: 'San Francisco, CA', time: 'Current session' },
                    { device: 'Safari on iPhone', location: 'San Francisco, CA', time: '2 hours ago' },
                  ].map((session, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div>
                        <p className="font-medium text-sm">{session.device}</p>
                        <p className="text-xs text-muted-foreground">{session.location} • {session.time}</p>
                      </div>
                      {session.time !== 'Current session' && (
                        <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                          Logout
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { title: 'Email Notifications', description: 'Receive email updates about your account' },
                { title: 'Usage Alerts', description: 'Get notified when you reach usage limits' },
                { title: 'Security Alerts', description: 'Receive alerts about security events' },
                { title: 'Product Updates', description: 'Get notified about new features and updates' },
                { title: 'Weekly Summary', description: 'Receive a weekly summary of your activity' },
                { title: 'Newsletter', description: 'Subscribe to our newsletter for tips and insights' },
              ].map((notif, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                  <div>
                    <p className="font-medium">{notif.title}</p>
                    <p className="text-sm text-muted-foreground">{notif.description}</p>
                  </div>
                  <Switch defaultChecked={i < 3} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Danger Zone */}
      <div className="relative overflow-hidden rounded-xl border border-destructive/20 bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-destructive">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">This action cannot be undone</p>
            </div>
            <Button variant="destructive" className="hover:bg-destructive/90">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
