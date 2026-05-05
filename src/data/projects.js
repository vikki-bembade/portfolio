import jokeS from '../assets/jokeS.svg'
import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'
import todos from '../assets/todos.svg'
import weathers from '../assets/weathers.svg'

const projects = [
    {
        name: 'Joke Application using API',
        img : jokeS,
        description: 'Built a simple Joke App using HTML, CSS, and JavaScript. The app fetches jokes from a public API and updates the UI with a fresh joke on every button click. This helped improve my understanding of async JavaScript and DOM interaction.',
        technologies: ['html', 'CSS', 'JavaScript', 'API Integration'],
        link: 'https://jokes-app-phi.vercel.app/'
    },
    {
        name: 'TODO application',
        img: todos,
        description: 'A responsive TODO application built with React and Tailwind CSS. It features a clean hero section, animated cards, and a modern projects carousel, all optimized for desktop and mobile layouts.',
        technologies: ['HTML', 'CSS', 'JavaScript','Local Storage'],
        link: 'https://todo-app-phi-seven-20.vercel.app/'
    },
    {
        name: 'Weather Dashboard',
        img: weathers,
        description: 'Created a weather dashboard interface using HTML and CSS that highlights cards, charts, and navigation controls. The layout is designed to keep content inside the card with scrollable description when text is long.',
        technologies: ['HTML', 'CSS', 'JavaScript','API Integration'],
        link: 'https://weather-app-psi-ten-37.vercel.app/'
    }
];

export default projects;