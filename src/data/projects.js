import jokeS from '../assets/jokeS.svg'
import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'

const projects = [
    {
        name: 'Joke Application using API',
        img : jokeS,
        description: 'Built a simple Joke App using HTML, CSS, and JavaScript. The app fetches jokes from a public API and updates the UI with a fresh joke on every button click. This helped improve my understanding of async JavaScript and DOM interaction.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://jokes-app-phi.vercel.app/'
    },
    {
        name: 'Portfolio Landing Page',
        img: reactLogo,
        description: 'A responsive portfolio landing page built with React and Tailwind CSS. It features a clean hero section, animated cards, and a modern projects carousel, all optimized for desktop and mobile layouts.',
        technologies: ['React', 'Tailwind CSS', 'Responsive Design'],
        link: 'https://example.com/portfolio'
    },
    {
        name: 'HTML/CSS Dashboard',
        img: htmlLogo,
        description: 'Created a dashboard interface using HTML and CSS that highlights cards, charts, and navigation controls. The layout is designed to keep content inside the card with scrollable description when text is long.',
        technologies: ['HTML', 'CSS', 'UI Design'],
        link: 'https://example.com/dashboard'
    }
];

export default projects;