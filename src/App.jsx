import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';
import HomePage from './pages/home-page.jsx';
import { profile } from './utils/portfolio-data.js';

function App() {
  return (
    <>
      <Header name={profile.name} />
      <HomePage />
      <Footer name={profile.name} socials={profile.socials} />
    </>
  );
}

export default App;
