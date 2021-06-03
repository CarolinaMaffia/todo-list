import './App.css';
import ShowItem from './components/ShowItem/ShowItem';

function App(props) {
  return (
    <div className="App">
      <h2>TODO list 🦄</h2>
      <>
        <ShowItem />
        <p>Made with xD by Caru</p>
      </>
    </div>
  );
}

export default App;
