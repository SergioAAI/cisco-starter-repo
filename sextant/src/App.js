import Banner from './components/banner';
import Exhibit from './components/exhibit';
import './App.css';
import Address from './components/address';
import Latency from './components/latency';

function App() {
  return (
    <>
      <Banner title={
        'Sextant'
      } />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: 'center',
        justifyContent: 'center',
      }}>
        <Exhibit header={"IPV4"}>
          <Address ipType={"ipv4"} />
        </Exhibit>
        <Exhibit header={"IPV6"}>
          <Address ipType={"ipv6"} />
        </Exhibit>
        <Exhibit header={"Latency"}>
          <Latency />
        </Exhibit>
      </div>

    </>
  );
}

export default App;
