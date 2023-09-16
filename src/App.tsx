import Layout from './layout';
import Week1 from './weekEnds/week1';

function App() {
  return (
    <Layout experience={<Week1 />}>
      <div className="text-white p-20 font-Kalam">
        <h1 className="text-4xl">Hello, world 👋!</h1>
        <p className="text-lg">This is a React Three-fiber Started app.</p>
      </div>
    </Layout>
  );
}

export default App;
