import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Header 컴포넌트
 *
 * Props:
 * @param {string} name - 로고 자리에 표시할 이름/타이틀 [Required]
 *
 * Example usage:
 * <Header name="홍길동" />
 */
function Header({ name }) {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700 }}>
            {name}
          </Typography>
          <Stack direction="row" spacing={4}>
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                underline="none"
                color="text.primary"
                sx={{ fontSize: '0.8125rem', fontWeight: 600 }}
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

export default Header;
