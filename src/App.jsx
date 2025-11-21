import './App.css';
import EmoCard from './Components/EmoCard';
import Header from './Components/Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <EmoCard
          emoji="❤️"
          name="Red Heart"
          meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
        />
      </main>
    </>
  );
}

export default App;
