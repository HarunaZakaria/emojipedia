import './App.css';
import EmoCard from './Components/EmoCard';
import Header from './Components/Header';
import emojipedia from './Components/Emojipedia';
import CreateEmoCard from './Components/CreateEmoCard';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="card-container">{emojipedia.map(CreateEmoCard)}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
