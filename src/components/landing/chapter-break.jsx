import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * ChapterBreak 컴포넌트
 *
 * Props:
 * @param {string} slogan - 다크 섹션 중앙에 표시할 슬로건 문구 [Required]
 *
 * Example usage:
 * <ChapterBreak slogan="Bare Your Line" />
 */
function ChapterBreak({ slogan }) {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'accent.main',
        minHeight: { xs: '60vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontSize: { xs: '2.5rem', md: '4rem' },
        }}
      >
        {slogan}
      </Typography>
    </Box>
  );
}

export default ChapterBreak;
