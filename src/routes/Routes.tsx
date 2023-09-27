import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import ButterFly from '../weekEnds/projects/butterFly';
import { Debug, Drei } from '../weekEnds/week1';
import LoadModels from '../weekEnds/week1/LoadModels';
import MouseEvents from '../weekEnds/week1/MouseEvents';
import PortalScene from '../weekEnds/week1/PortalScene';
import PostProcessing from '../weekEnds/week1/PostProcessing';
import Staging from '../weekEnds/week1/Staging';
import Text3d from '../weekEnds/week1/Text3d';
import Game from '../weekEnds/week1/game';
import Interface from '../weekEnds/week1/game/Interface';
import PhysicsDemo from '../weekEnds/week1/physicsDemo';
import SimplePortfolio from '../weekEnds/week1/simplePortfolio';

const weekendsExercise = [
  {
    path: '/threejs-journey',
    children: [
      {
        path: 'drei',
        element: <Layout experience={<Drei />} />,
      },
      {
        path: 'debug',
        element: <Layout experience={<Debug />} />,
      },
      {
        path: 'staging',
        element: <Layout experience={<Staging />} />,
      },
      {
        path: 'LoadModels',
        element: <Layout experience={<LoadModels />} />,
      },
      {
        path: '3dText',
        element: <Layout experience={<Text3d />} />,
      },
      {
        path: 'portal-scene',
        element: <Layout experience={<PortalScene />} />,
      },
      {
        path: 'mouse-events',
        element: <Layout experience={<MouseEvents />} />,
      },
      {
        path: 'post-processing',
        element: <Layout experience={<PostProcessing />} />,
      },
      {
        path: 'simple-portfolio',
        element: <Layout experience={<SimplePortfolio />} />,
      },
      {
        path: 'physics',
        element: <Layout experience={<PhysicsDemo />} />,
      },
      {
        path: 'game',
        element: (
          <Layout experience={<Game />}>
            <Interface />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/landing-page',
    children: [
      {
        path: 'butterfly',
        element: (
          <Layout experience={<ButterFly />}>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 z-[110]  ">
              <img src="/butterfly/logo.png" alt="logo" className="w-10 h-10" />
            </span>
            <span
              style={{
                background: 'linear-gradient(0deg, transparent 70%, #000  )',
              }}
              className=" pointer-events-none   fixed w-full h-screen top-0 left-0 bottom-0 right-0 z-[100] "
            />
          </Layout>
        ),
      },
    ],
  },
];

// navigation Logic
export const navData = weekendsExercise.map((route) => ({
  title: route.path.split('/')[1],
  projects: route.children.map((child) => child.path),
}));

const routesData = [
  {
    path: '/',
    element: <Layout experience={<Drei />} />,
  },
  ...weekendsExercise,
];

const routes = createBrowserRouter(routesData);

export default routes;
