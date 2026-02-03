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
    <div className="space-y-8 animate-fade-in-hero">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Projects</h1>
          <p className="text-white/70 text-lg font-light">
            Manage and organize all your projects
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-slate-100 rounded-full font-semibold px-6">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-500 flex flex-col"
          >
            <div className="space-y-4 flex-1">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white group-hover:text-white/90 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-1">
                    {project.description}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-white/60 hover:text-white/80 hover:bg-white/10 rounded-full"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="end" 
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
                  >
                    <DropdownMenuItem className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20">
                      <ExternalLink className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white/70 cursor-pointer hover:bg-white/20 focus:bg-white/20">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Status & Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active'
                      ? 'bg-white/20 text-white'
                      : project.status === 'In Progress'
                      ? 'bg-white/15 text-white/80'
                      : 'bg-white/10 text-white/60'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-white/60">{project.progress}%</span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-white/60 h-full rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/20">
                <span className="text-xs text-white/60">
                  {project.team} team members
                </span>
                <span className="text-xs text-white/60">
                  {project.created}
                </span>
              </div>
            </div>

            {/* Hover Action */}
            <Button
              className="w-full mt-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black hover:bg-slate-100 rounded-full font-semibold"
            >
              Open Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
