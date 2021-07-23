import Adobe from './components/Adobe';
import Affinity from './components/Afiinity';
import Header from './components/Header';
import Nav from './components/Nav';
import Software from './components/Software';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <Adobe />
      <Affinity />
      <Software />
    </div>
  );
}

export default App;
