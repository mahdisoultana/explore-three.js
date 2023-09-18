import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import { Debug, Drei } from '../weekEnds/week1';

const weekendsExercise = [
  {
    path: '/weekend1',
    children: [
      {
        path: 'drei',
        element: <Layout experience={<Drei />} />,
      },
      {
        path: 'debug',
        element: <Layout experience={<Debug />} />,
      },
    ],
  },
];

// navigation Logic
export const navData = weekendsExercise.map((route, index) => ({
  weekNum: index + 1,
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
