import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <section className="wrapper">
        <main className="content" role="main">
          <Outlet />
        </main>
      </section>
      <Footer />
    </>
  );
}

export default App;
