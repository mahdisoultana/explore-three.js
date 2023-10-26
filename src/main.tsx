import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Context from './context/index.tsx';
import './index.css';
import routes from './routes/Routes.tsx';
window.gsap = gsap;
const lenis = new Lenis({ duration: 2, smoothTouch: true, smoothWheel: true });

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Context>
      <RouterProvider router={routes} />
    </Context>
  </>,
);
