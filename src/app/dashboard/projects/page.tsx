'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Plus, MoreVertical, ExternalLink, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const projects = [
  {
    id: 1,
    name: 'LLM API Integration',
    description: 'Complete integration with multiple LLM providers',
    status: 'Active',
    progress: 85,
    team: 3,
    created: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Dashboard Analytics',
    description: 'Real-time analytics and monitoring dashboard',
    status: 'In Progress',
    progress: 60,
    team: 2,
    created: '5 days ago',
  },
  {
    id: 3,
    name: 'Authentication Module',
    description: 'OAuth 2.0 and JWT authentication system',
    status: 'Active',
    progress: 100,
    team: 4,
    created: '1 month ago',
  },
  {
    id: 4,
    name: 'API Documentation',
    description: 'Comprehensive API docs with interactive examples',
    status: 'In Progress',
    progress: 45,
    team: 2,
    created: '3 days ago',
  },
  {
    id: 5,
    name: 'Mobile App',
    description: 'Cross-platform mobile application',
    status: 'Planned',
    progress: 10,
    team: 5,
    created: '1 day ago',
  },
  {
    id: 6,
    name: 'CI/CD Pipeline',
    description: 'Automated deployment and testing pipeline',
    status: 'Active',
    progress: 90,
    team: 3,
    created: '2 weeks ago',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Manage and organize all your projects in one place
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-400/90 w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative space-y-4 flex-1">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-background/80 backdrop-blur-xl border-white/10">
                    <DropdownMenuItem className="cursor-pointer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive cursor-pointer">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status & Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-muted-foreground">{project.progress}%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-cyan-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-xs text-muted-foreground">
                  {project.team} team members
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.created}
                </span>
              </div>
            </div>

            {/* Hover Action */}
            <Button
              variant="ghost"
              className="w-full mt-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
            >
              Open Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
