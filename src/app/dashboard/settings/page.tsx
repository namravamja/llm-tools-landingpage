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
    <div className="space-y-8 animate-fade-in-hero">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Settings & Preferences</h1>
        <p className="text-white/70 text-lg md:text-xl font-light">
          Manage your account, security, and preferences
        </p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent border border-white/20 p-1 h-auto rounded-xl">
          <TabsTrigger 
            value="account"
            className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white rounded-lg border border-white/0 data-[state=active]:border-white/0 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="preferences"
            className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white rounded-lg border border-white/0 data-[state=active]:border-white/0 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Preferences</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white rounded-lg border border-white/0 data-[state=active]:border-white/0 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </span>
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white rounded-lg border border-white/0 data-[state=active]:border-white/0 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </span>
          </TabsTrigger>
        </TabsList>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-white/80 font-semibold">Full Name</Label>
                  <Input 
                    id="fullname" 
                    placeholder="John Doe" 
                    defaultValue="John Doe"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 hover:border-white/30 focus:border-white/50 transition-colors rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 font-semibold">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com" 
                    defaultValue="john@example.com"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 hover:border-white/30 focus:border-white/50 transition-colors rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio" className="text-white/80 font-semibold">Bio</Label>
                <textarea 
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 hover:border-white/30 focus:border-white/50 transition-colors rounded-lg p-3 min-h-24"
                />
              </div>
              <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold">
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Preferences</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="language" className="text-white/80 font-semibold block mb-2">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-white/10 border border-white/20 text-white rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/10 backdrop-blur-md border border-white/20">
                    <SelectItem value="en" className="text-white">English</SelectItem>
                    <SelectItem value="es" className="text-white">Spanish</SelectItem>
                    <SelectItem value="fr" className="text-white">French</SelectItem>
                    <SelectItem value="de" className="text-white">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timezone" className="text-white/80 font-semibold block mb-2">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger className="bg-white/10 border border-white/20 text-white rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/10 backdrop-blur-md border border-white/20">
                    <SelectItem value="utc" className="text-white">UTC</SelectItem>
                    <SelectItem value="est" className="text-white">EST</SelectItem>
                    <SelectItem value="cst" className="text-white">CST</SelectItem>
                    <SelectItem value="pst" className="text-white">PST</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold">
                Save Preferences
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80 font-semibold">Current Password</Label>
                <Input 
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 hover:border-white/30 focus:border-white/50 transition-colors rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newpassword" className="text-white/80 font-semibold">New Password</Label>
                <Input 
                  id="newpassword"
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 hover:border-white/30 focus:border-white/50 transition-colors rounded-lg"
                />
              </div>

              <div className="rounded-xl border border-white/20 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-white/60" />
                    <span className="text-white/70">Two-Factor Authentication</span>
                  </div>
                  <Switch />
                </div>
              </div>

              <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold">
                Update Password
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {[
                { label: 'Email Notifications', desc: 'Receive updates via email' },
                { label: 'Usage Alerts', desc: 'Get notified when usage reaches 80%' },
                { label: 'Security Updates', desc: 'Important security notices' },
                { label: 'Product Updates', desc: 'New features and improvements' },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-white/20 bg-white/5 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white/90 font-semibold">{item.label}</p>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={i < 2} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
