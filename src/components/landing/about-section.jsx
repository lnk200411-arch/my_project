import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

/**
 * AboutSection 컴포넌트
 *
 * Props:
 * @param {object} profile - 프로필 정보(bio, skills) [Required]
 *
 * Example usage:
 * <AboutSection profile={profile} />
 */
function AboutSection({ profile }) {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12, lg: 16 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h2">About</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ maxWidth: 560 }}>
              {profile.bio.ko}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, maxWidth: 560 }}>
              {profile.bio.en}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 4, rowGap: 1 }}>
              {profile.skills.map((skill) => (
                <Chip key={skill} label={skill} sx={{ bgcolor: 'accent.main' }} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutSection;
