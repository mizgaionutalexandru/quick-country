import classes from './App.module.css';
import Search from './components/Search/Search';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.content}>
        <Search />
        {/* countries */}
      </div>
      <div className={classes.map} id="map"></div>
    </div>
  );
}

export default App;
