import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/compA';
import ClockHook from './components/pure/ClockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
{/*         <Clock />
 */}        
      <ClockHook></ClockHook>
      </header>
    </div>
  );
}

export default App;
