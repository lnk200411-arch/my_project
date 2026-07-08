import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DECORATIONS = [
  { char: 'P', top: '18%', left: '46%', size: 28 },
  { char: '/', top: '22%', left: '58%', size: 22, rotate: -15 },
  { char: '○', top: '30%', left: '30%', size: 14 },
  { char: '○', top: '30%', left: '68%', size: 14 },
  { char: '\\', top: '42%', left: '24%', size: 22, rotate: 15 },
  { char: '\\', top: '42%', left: '74%', size: 22, rotate: -15 },
  { char: 'ㄴ', top: '54%', left: '20%', size: 20 },
  { char: 'ㄹ', top: '54%', left: '78%', size: 20 },
  { char: '○', top: '68%', left: '30%', size: 14 },
  { char: '↘', top: '68%', left: '66%', size: 20 },
  { char: '/', top: '76%', left: '38%', size: 22, rotate: -15 },
  { char: '\\', top: '76%', left: '62%', size: 22, rotate: 15 },
];

/**
 * HeroSection 컴포넌트
 *
 * Props:
 * @param {object} profile - 프로필 정보(name, role, email, instagramHandle) [Required]
 * @param {Array<{title: string}>} projects - Selected Works 목록에 표시할 프로젝트 배열 [Required]
 *
 * Example usage:
 * <HeroSection profile={profile} projects={projects} />
 */
function HeroSection({ profile, projects }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
      }}
    >
      {DECORATIONS.map(({ char, top, left, size, rotate }, index) => (
        <Typography
          key={`${char}-${index}`}
          aria-hidden="true"
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top,
            left,
            fontSize: size,
            color: 'text.secondary',
            transform: rotate ? `rotate(${rotate}deg)` : 'none',
          }}
        >
          {char}
        </Typography>
      ))}

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h1" sx={{ fontWeight: 600, letterSpacing: '-0.02em' }}>
          {profile.name}
        </Typography>
        <Typography variant="h3" sx={{ color: 'text.secondary', mt: 1, mb: 6 }}>
          {profile.role}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Selected Works
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, maxWidth: 420, mx: 'auto' }}>
            {projects.map((project) => project.title).join(', ')}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Contact
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {profile.email}
          </Typography>
          <Typography variant="body2">{profile.instagramHandle}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
