import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import { Debug, Drei } from '../weekEnds/week1';
import LoadModels from '../weekEnds/week1/LoadModels';
import PortalScene from '../weekEnds/week1/PortalScene';
import Staging from '../weekEnds/week1/Staging';
import Text3d from '../weekEnds/week1/Text3d';

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
