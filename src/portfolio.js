const header = {
  homepage: 'https://rydl3r.github.io/portfolio',
  title: 'Rydler.',
}

const about = {
  name: 'Ivan Mukoed',
  role: 'Front End Engineer',
  description:
    "Hi! My name is Ivan Mukoed, I'm a frontend developer, and I love to help my clients and their websites reach their maximum potential by making beautiful, modern and self-selling products.",
  social: {
    linkedin: 'https://www.linkedin.com/in/ivan-mukoed-7636a4214/',
    github: 'https://github.com/Rydl3r',
  },
}

const projects = [
  {
    name: 'SocR - Social Media',
    description:
      'A social media react app made using a full range of modern technologies. A lot of features and just a fun place to explore.',
    stack: ['React', 'Redux', 'Firebase', 'React Router', 'Material UI'],
    sourceCode: 'https://github.com/Rydl3r/socr',
    livePreview: 'https://socr.vercel.app/',
  },
  {
    name: 'Movies Database',
    description:
      'Movies database made with React, React Router, Firebase and TMDB API. You can add movies to your watchlist and get info about them',
    stack: ['React', 'Firebase', 'React Router'],
    sourceCode: 'https://github.com/Rydl3r/movies-db',
    livePreview: 'https://movies-db-green.vercel.app/',
  },
  {
    name: 'Recreate Ukraine',
    description:
      'This is an open-call to the architects, artists and designers of the world. Help us reimagine the future of Ukraine after the war is over.',
    stack: ['React', 'React Router'],
    livePreview: 'https://recreateua.com/',
  },
  {
    name: 'Weather App',
    description:
      'Weather App made with React. You can get weather info for any city in the world',
    stack: ['React', 'OpenWeather API'],
    sourceCode: 'https://github.com/Rydl3r/weather-app',
    livePreview: 'https://weather-app-pi-nine.vercel.app/',
  },
  {
    name: 'Quiz Game',
    description:
      'Quiz Game made with React. A fun quiz game with random question and scoreboard',
    stack: ['React', 'Quiz API'],
    sourceCode: 'https://github.com/Rydl3r/quiz-game',
    livePreview: 'https://quiz-game-omega.vercel.app/',
  },
  {
    name: 'Rock, Paper, Scissors',
    description:
      'A classic, fun rock, paper, scissors game made with pure HTML, CSS, JS',
    stack: ['HTML', 'CSS', 'JS'],
    sourceCode: 'https://github.com/Rydl3r/rock-paper-scissors',
    livePreview: 'https://rock-paper-scissors-indol-mu.vercel.app/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Angular',
  'VueJS',
  'NextJS',
  'NuxtJS',
  'Redux',
  'RecoilJS',
  'MobX',
  'NGRX',
  'Bootstrap',
  'TailwindCSS',
  'GraphQL',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'Jest',
]

const contact = {
  email: '1rydler@gmail.com',
}

export { header, about, projects, skills, contact }
