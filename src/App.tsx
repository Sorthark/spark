import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LocaleProvider } from './locale'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LoopPage } from './pages/LoopPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { TechPage } from './pages/TechPage'
import { DemoPage } from './pages/DemoPage'
import { InnovationPage } from './pages/InnovationPage'
import { TryPage } from './pages/TryPage'
import { TeamPage } from './pages/TeamPage'
import { VideoPage } from './pages/VideoPage'
import { BusinessPage } from './pages/BusinessPage'
import { CommunityPage } from './pages/CommunityPage'
import { PlayPage } from './pages/PlayPage'

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter basename="/spark">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="loop" element={<LoopPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="innovation" element={<InnovationPage />} />
          <Route path="video" element={<VideoPage />} />
          <Route path="play" element={<PlayPage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="try" element={<TryPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </LocaleProvider>
  )
}
