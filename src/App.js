import './App.css';
import Auth from './components/Auth';
import TweetAnalysis from './components/TweetAnalysis';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {

  return (
    <div class="App">
      <Header />
      
      <div className="grid-container grid grid-cols-3 m-8 gap-8">
        <Auth  />
        
        <div className="col-span-2" >
          <TweetAnalysis/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
