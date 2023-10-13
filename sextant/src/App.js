import Banner from './components/banner';
import Exhibit from './components/exhibit';
import './App.css';
import Address from './components/address';
import Latency from './components/latency';

function App() {
  return (
    <div>
      <Banner title={
        'Sextant'
      } />
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <Exhibit header={"IPV4"}>
          <h2>Displaying IPV4</h2>
          <Address ipType={"ipv4"} />
        </Exhibit>
        <Exhibit header={"IPV6"}>
          <h2>Displaying IPV6</h2>
          <Address ipType={"ipv6"} />
        </Exhibit>
        <Exhibit header={"Latency"}>
          <h2>Displaying Latency</h2>
          <Latency />
        </Exhibit>
      </div>

    </div>
  );
}

export default App;
