import Box from '@mui/material/Box';

import HeroSection from '../components/landing/hero-section.jsx';
import ProjectChapter from '../components/landing/project-chapter.jsx';
import ChapterBreak from '../components/landing/chapter-break.jsx';
import AboutSection from '../components/landing/about-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';
import { profile, projects, chapterBreaks } from '../utils/portfolio-data.js';

/**
 * HomePage 컴포넌트
 *
 * 단일 페이지 스크롤형 포트폴리오 조립: Hero → 프로젝트 챕터(사이사이 챕터브레이크) → About → Contact
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <Box component="main">
      <HeroSection profile={profile} />

      <Box id="work">
        {projects.map((project, index) => (
          <Box key={project.id}>
            <ProjectChapter project={project} />
            {index < chapterBreaks.length && <ChapterBreak slogan={chapterBreaks[index]} />}
          </Box>
        ))}
      </Box>

      <AboutSection profile={profile} />
      <ContactSection profile={profile} />
    </Box>
  );
}

export default HomePage;
