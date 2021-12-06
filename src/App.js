import './App.css';
import Header from './redux/components/Header';
import Instructions from './redux/components/Instructions';
import InputMovie from './redux/components/InputMovie';
import UsersRanking from './redux/components/UsersRanking';
import MoviesRank from './redux/components/MoviesRank';

function App() {
  return (
    <>
      <Header />
      <Instructions />
      <InputMovie />
      <MoviesRank />
      <UsersRanking />
    </>
  );
}

export default App;