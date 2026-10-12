import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LoopPage } from './pages/LoopPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { TechPage } from './pages/TechPage'
import { DemoPage } from './pages/DemoPage'
import { InnovationPage } from './pages/InnovationPage'
import { TryPage } from './pages/TryPage'
import { TeamPage } from './pages/TeamPage'

export default function App() {
  return (
    <BrowserRouter basename="/spark">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="loop" element={<LoopPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="innovation" element={<InnovationPage />} />
          <Route path="try" element={<TryPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
