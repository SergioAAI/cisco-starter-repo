import Banner from './components/banner';
import './App.css';
import Exhibit from './components/exhibit';

function App() {
  return (
    <>
      <Banner title={
        'Sextant'
      } />
      <Exhibit header={"Exhibit 1"}>
        Hi
      </Exhibit>
      <Exhibit header={"Exhibit 1"}>
        Hi
      </Exhibit>
      <Exhibit header={"Exhibit 1"}>
        Hi
      </Exhibit>

    </>
  );
}

export default App;
