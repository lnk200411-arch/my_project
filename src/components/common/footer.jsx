import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

/**
 * Footer 컴포넌트
 *
 * Props:
 * @param {string} name - 카피라이트에 표시할 이름 [Required]
 * @param {Array<{label: string, url: string}>} socials - 소셜 링크 목록 [Required]
 *
 * Example usage:
 * <Footer name="홍길동" socials={socials} />
 */
function Footer({ name, socials }) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'accent.main',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 0 }}
          sx={{
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" sx={{ color: 'inherit' }}>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {socials.map(({ label, url }) => (
              <Link
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: 'inherit', fontSize: '0.8125rem' }}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
