import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/theme/ThemeContext'
import { Home } from '@/pages/Home'
import { CaseStudy } from '@/pages/CaseStudy'
import { About } from '@/pages/About'
import { WorkHistory } from '@/pages/WorkHistory'
import { Resume } from '@/pages/Resume'
import { Projects } from '@/pages/Projects'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { NotFound } from '@/pages/NotFound'
import { AddEntryModal } from '@/drafts/AddEntryModal'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/work-history" element={<WorkHistory />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* Author-only, unlinked: the work page with the add-entry dialog over it. */}
            <Route path="/add" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AddEntryModal />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}
