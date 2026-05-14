import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import CaseStudies from './routes/CaseStudies'
import CaseStudyDetail from './routes/CaseStudyDetail'
import Nav from './components/Nav'
import GradientMesh from './components/GradientMesh'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GradientMesh />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
