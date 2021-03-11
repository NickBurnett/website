import ReactDOM from 'react-dom';
import Website from './js/Website';
const dark = (
    <svg id='nav-theme-dark' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='fire' className='nav-theme' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
        <path fill='currentColor' d='M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z'></path>
    </svg>
);
/*const light = (
    <svg id='nav-theme-light' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='snowflake' className='nav-theme' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path fill='currentColor' d='M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z'></path>
    </svg>
);*/
const light = (
    <svg id='nav-theme-light' aria-hidden='true' focusable='false' data-prefix='fas' data-icon='fire' className='nav-theme' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
        <path fill='currentColor' d='M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z'></path>
    </svg>
);
export let colormode = {
    svg: dark
}
export function swapTheme() {
    if (!colormode) colormode = { svg: dark };
    let theme = localStorage.getItem('theme');
    if (!theme) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    } else {
        switch (theme) {
            case 'dark':
                theme = 'light';
                break;
            case 'light':
                theme = 'dark';
                break;
            default:
                theme = 'dark';
                break;
        }
    }
    localStorage.setItem('theme', theme);
    updateTheme();
}
export function updateTheme() {
    let theme = localStorage.getItem('theme');
    switch (theme) {
        case 'dark':
            colormode.svg = dark;
            break;
        case 'light':
            colormode.svg = light;
            break;
        default:
            colormode.svg = dark;
            break;
    }
    const root = document.getElementsByTagName('html')[0];
    const colors = ['0', '1', '2', '3', '3t', '4', '4t', '5', '6', '7'];
    for (let c of colors) {
        root.style.setProperty('--color' + c, getComputedStyle(root).getPropertyValue('--' + theme + c));
    }
}
export function isInViewport(id) {
    const element = document.getElementById(id);
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.top <= window.innerHeight * 0.90) || (rect.bottom >= window.innerHeight * 0.05 && rect.bottom <= window.innerHeight);
}
ReactDOM.render(
    <Website />,
    document.getElementById('root')
);