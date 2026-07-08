import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import ImageGrid from './image-grid.jsx';

/**
 * ProjectChapter 컴포넌트
 *
 * Props:
 * @param {object} project - 프로젝트 데이터(no, title, category, meta, caption, gridVariant, images) [Required]
 *
 * Example usage:
 * <ProjectChapter project={project} />
 */
function ProjectChapter({ project }) {
  const { no, title, category, meta, caption, gridVariant, images } = project;
  const heroImage = images[0];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12, lg: 16 } }}>
      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 3,
            mb: { xs: 3, md: 5 },
          }}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
              {no} · {category}
            </Typography>
            <Typography variant="h2">{title}</Typography>
          </Box>
          <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
            {meta.map(({ label, value }) => (
              <Box key={label}>
                <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                  {label}
                </Typography>
                <Typography variant="body2">{value}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: { xs: 300, md: 500 },
          bgcolor: heroImage.color,
        }}
      />

      <Box sx={{ maxWidth: 'sm', mx: 'auto', mt: 5, px: { xs: 2, md: 0 } }}>
        <Typography variant="body1">{caption.ko}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {caption.en}
        </Typography>
      </Box>

      <Box sx={{ mt: 5, px: { xs: 2, md: 4 } }}>
        <ImageGrid variant={gridVariant} images={images} />
      </Box>
    </Box>
  );
}

export default ProjectChapter;
