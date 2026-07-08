import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

/**
 * ContactSection 컴포넌트
 *
 * Props:
 * @param {object} profile - 프로필 정보(email, socials) [Required]
 *
 * Example usage:
 * <ContactSection profile={profile} />
 */
function ContactSection({ profile }) {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 8, md: 12, lg: 16 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ px: { xs: 2, md: 4 } }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Let&apos;s work together
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          새로운 프로젝트나 협업 제안은 언제나 환영합니다.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={`mailto:${profile.email}`}
          sx={{ mb: 4 }}
        >
          {profile.email}
        </Button>
        <Stack direction="row" spacing={3} justifyContent="center">
          {profile.socials.map(({ label, url }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="text.primary"
              sx={{ fontSize: '0.8125rem', fontWeight: 600 }}
            >
              {label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default ContactSection;
