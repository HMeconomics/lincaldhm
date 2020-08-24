const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Richard Zhu',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Richard Zhu',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Richard Zhu',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Richard Zhu',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Richard Zhu',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
