import fileshareCover from '../assets/projects/fileshare-cover.png';
import communityCover from '../assets/projects/community-cover.png';

/**
 * 포트폴리오 플레이스홀더 데이터
 *
 * 실제 프로젝트 콘텐츠(이미지·문구)가 준비되면 이 파일의 값만 교체하면 된다.
 */

export const profile = {
  name: '홍길동',
  role: 'Product Designer & Frontend Developer',
  tagline: '전통의 결을 현대적인 화면으로 옮기는 작업을 합니다.',
  bio: {
    ko: '사용자 경험과 비주얼 디테일 사이의 균형을 고민하는 디자이너 겸 개발자입니다. 브랜드의 정체성을 인터페이스 전반에 일관되게 녹여내는 작업을 좋아합니다.',
    en: 'A designer-developer who balances user experience with visual detail, weaving brand identity consistently across every screen.',
  },
  email: 'hello@example.com',
  instagramHandle: '@hongildong_design',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
  ],
  skills: ['React', 'MUI', 'Figma', 'TypeScript', 'Motion Design'],
};

export const projects = [
  {
    id: 'project-01',
    no: '01',
    title: "Contemporary Archive 'HANOK'",
    category: 'Brand Identity',
    meta: [
      { label: 'Client', value: 'Hanok Culture Center' },
      { label: 'Duration', value: '2026.02 – 2026.04' },
      { label: 'Role', value: 'UX Design / Frontend' },
    ],
    caption: {
      ko: '전통 한옥 건축의 조형미를 현대적인 그리드 시스템으로 재해석한 아카이브 웹사이트입니다.',
      en: 'An archive website that reinterprets the formative beauty of traditional Hanok architecture through a modern grid system.',
    },
    gridVariant: 'equal3',
    images: [
      { label: 'Dial Telephone', color: 'primary.light' },
      { label: 'Delivery Booklet', color: 'accent.main' },
      { label: 'LP Listening', color: 'grey.300' },
    ],
  },
  {
    id: 'project-02',
    no: '02',
    title: "Duotone Poster Series 'KOREA'",
    category: 'Visual Design',
    meta: [
      { label: 'Client', value: 'Traditional Art Exhibition' },
      { label: 'Duration', value: '2026.05 – 2026.06' },
      { label: 'Role', value: 'Art Direction' },
    ],
    caption: {
      ko: '핑크와 블랙의 대비를 활용한 듀오톤 포스터 시리즈로, 전통과 현대의 충돌을 시각적으로 표현했습니다.',
      en: 'A duotone poster series using pink-and-black contrast to visually express the collision of tradition and modernity.',
    },
    gridVariant: 'split2',
    images: [
      { label: 'Poster Front', color: 'primary.main' },
      { label: 'Poster Detail', color: 'secondary.main' },
    ],
  },
  {
    id: 'project-03',
    no: '03',
    title: 'Modular Grid Identity System',
    category: 'Design System',
    meta: [
      { label: 'Client', value: 'Self-initiated' },
      { label: 'Duration', value: '2026.06 – 2026.07' },
      { label: 'Role', value: 'Design System / Frontend' },
    ],
    caption: {
      ko: '원·사각·반원 등 기본 도형을 조합한 모듈형 그리드 아이덴티티 시스템을 구축했습니다.',
      en: 'Built a modular grid identity system combining basic shapes such as circles, squares, and semicircles.',
    },
    gridVariant: 'numbered',
    images: [
      { label: 'Symbol 01', color: 'primary.light' },
      { label: 'Symbol 02', color: 'accent.main' },
      { label: 'Symbol 03', color: 'grey.300' },
      { label: 'Symbol 04', color: 'primary.dark' },
    ],
  },
  {
    id: 'project-04',
    no: '04',
    title: 'FileShare',
    category: 'Web Development',
    meta: [],
    caption: {
      ko: '로그인 없이 파일을 업로드하고 공유할 수 있는 파일 공유 사이트입니다.',
      en: 'A file sharing site where users can upload and share files without logging in.',
    },
    images: [{ label: 'Cover', src: fileshareCover }],
    link: 'https://lnk200411-arch.github.io/fileshare/',
  },
  {
    id: 'project-05',
    no: '05',
    title: 'My Community',
    category: 'Web Development',
    meta: [],
    caption: {
      ko: '게시글을 작성하고 소통할 수 있는 커뮤니티 사이트입니다.',
      en: 'A community site for writing posts and interacting with other members.',
    },
    images: [{ label: 'Cover', src: communityCover }],
    link: 'https://sep5.github.io/AI_VIBE/',
  },
];

export const chapterBreaks = [
  'Bare Your Line',
  'Form Follows Culture',
];
