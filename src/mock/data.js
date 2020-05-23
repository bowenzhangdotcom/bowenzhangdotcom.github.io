import { v1 as uuidv1 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Bowen Zhang | Developer',
  lang: 'en',
  description: 'Welcome to BowenZhang.com!',
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Bowen Zhang',
  subtitle: 'Welcome to my personal projects',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a 2017 Cornell grad & former consultant currently working at Yext in the UPWARD rotational program.`,
  paragraphTwo: `I recently discovered the beauty of programming and am glad you've taken the time to take a look at my personal projects!`,
  paragraphThree: `Outside of work I also enjoy poker, electronic music, Super Smash Bros. and getting better at picking heavy things up and putting them down`,
  resume: 'https://www.linkedin.com/in/bowenzhangdotcom/',
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio',
  // },
  {
    id: uuidv1(),
    img: 'nice-stocks-logo.jpg',
    title: 'NiceStocks.Info - WIP',
    info:
      'Tracks comparisons of stock price changes to discussions on investing-related subreddits',
    info2: 'Currently building with React',
    url: 'www.nicestocks.info',
    repo: 'https://github.com/bowenzhangdotcom',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to learn more?',
  btn: 'Contact me',
  email: 'mailto:bowenzhang@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bowenzhangdotcom/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/bowenzhangdotcom',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
