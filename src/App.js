import logo from './logo.svg';
import './App.css';
import RotatingBlock from './RotatingBlock'
function App() {
  return (
    <div className="App">
        <RotatingBlock>
            <div style = {{width: '20px', height: '20px', background: 'green'}}>
            </div>
        </RotatingBlock>
        
        <RotatingBlock>
            <div style = {{width: '20px', height: '20px', border: '1px solid black'}}>
            </div>
        </RotatingBlock>
    </div>
  );
}

export default App;
