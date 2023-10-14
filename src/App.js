
import './App.css';
import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import Sidebar from './components/sideNav/SideNav';
import Table from './components/table/Table';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <div className="App">
     <div className='NavContainer' >
      <Sidebar/>
     </div>
     <div className='mainContainer'>
      <div className='topContainer'>
        <TopBar/>
      </div>
      <div className='cardContainer' >
        <Cards />
      </div>
      <div className='chartContainer' >
        <Chart/>
      </div>
      <div className='tableContainer'>
        <Table/>
      </div>
     </div>
    </div>
  );
}

export default App;
