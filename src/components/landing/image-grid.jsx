import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

/**
 * ImageGrid 컴포넌트
 *
 * Props:
 * @param {'equal3'|'split2'|'numbered'} variant - 그리드 배치 유형 [Required]
 * @param {Array<{label: string, color: string}>} images - 플레이스홀더 이미지 목록(label, 팔레트 color 토큰) [Required]
 *
 * Example usage:
 * <ImageGrid variant="equal3" images={images} />
 */
function ImageGrid({ variant, images }) {
  if (variant === 'split2') {
    return (
      <Grid container spacing={0}>
        {images.map(({ label, color }) => (
          <Grid key={label} size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: 280, md: 420 },
                bgcolor: color,
                display: 'flex',
                alignItems: 'flex-end',
                p: 2,
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 700 }}>
                {label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (variant === 'numbered') {
    return (
      <Grid container spacing={2}>
        {images.map(({ label, color }, index) => (
          <Grid key={label} size={{ xs: 6, md: 4 }}>
            <Box sx={{ position: 'relative', aspectRatio: '1 / 1', bgcolor: color }}>
              <Chip
                label={index + 1}
                size="small"
                sx={{ position: 'absolute', top: 8, left: 8, bgcolor: 'common.white' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={0}>
      {images.map(({ label, color }) => (
        <Grid key={label} size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              aspectRatio: '4 / 3',
              bgcolor: color,
              display: 'flex',
              alignItems: 'flex-end',
              p: 2,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              {label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default ImageGrid;
