import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/menucomponent'
import LoginComponent from './components/logincomponent';
import CompaniesListComponent from './components/companieslistcomponent';
import WatchListComponent from './components/watchlistcomponent';
import PerformanceComponent from './components/performancecomponent';

function App() {
  return (
    <div className="App">
      <MenuComponent/>
      {/* <CompaniesListComponent/> */}
      {/* <LoginComponent/> */}
      {/* <WatchListComponent/> */}
      <PerformanceComponent/>
    </div>
  );
}

export default App;
