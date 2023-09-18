import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { Debug, Drei } from './weekEnds/week1';

const weekends = [
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

const routesData = [
  {
    path: '/',
    element: <Layout experience={<Drei />} />,
  },
  ...weekends,
];

const routes = createBrowserRouter(routesData);

export const nav = weekends.map((route, index) => ({
  weekNum: index + 1,
  projects: route.children.map((child) => child.path),
}));
export default routes;
