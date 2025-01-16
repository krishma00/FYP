"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Sidebar from "./sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b p-4">
          <div className="flex items-center max-w-screen-xl mx-auto gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <select className="px-3 py-2 border rounded-md">
                <option>Time & Date</option>
              </select>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Export Data
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-screen-xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

