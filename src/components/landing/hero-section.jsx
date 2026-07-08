import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * HeroSection 컴포넌트
 *
 * Props:
 * @param {object} profile - 프로필 정보(name, role, tagline) [Required]
 *
 * Example usage:
 * <HeroSection profile={profile} />
 */
function HeroSection({ profile }) {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: 'background.default',
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="caption"
        sx={{ letterSpacing: 2, color: 'text.secondary', mb: 3 }}
      >
        SELECTED WORKS 2026
      </Typography>
      <Typography variant="h1" sx={{ mb: 2 }}>
        {profile.name}
      </Typography>
      <Typography variant="h3" sx={{ color: 'text.secondary', mb: 3 }}>
        {profile.role}
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 480 }}>
        {profile.tagline}
      </Typography>
      <Box
        component="a"
        href="#work"
        sx={{
          mt: 8,
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'text.primary',
          textDecoration: 'none',
          borderBottom: '1px solid',
          borderColor: 'text.primary',
          pb: 0.5,
        }}
      >
        Scroll to explore
      </Box>
    </Box>
  );
}

export default HeroSection;
