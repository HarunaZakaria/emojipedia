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
        {/* <div className="row">
          <div className="col-lg-3 col-mg-4 col-sm-6">
            <EmoCard
              emoji="❤️"
              name="Red Heart"
              meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
            />
          </div>
          <div className="col-lg-3 col-mg-4 col-sm-6">
            <EmoCard
              emoji="❤️"
              name="Red Heart"
              meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
            />
          </div>
          <div className="col-lg-3 col-mg-4 col-sm-6">
            <EmoCard
              emoji="❤️"
              name="Red Heart"
              meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
            />
          </div>
          <div className="col-lg-3 col-mg-4 col-sm-6">
            <EmoCard
              emoji="❤️"
              name="Red Heart"
              meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
            />
          </div>
          <div className="col-lg-3 col-mg-4 col-sm-6">
            <EmoCard
              emoji="❤️"
              name="Red Heart"
              meaning="The red heart ideograph is traditionally used for expressions of love and romance across many cultures"
            />
          </div>
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
