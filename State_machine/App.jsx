import TrafficLight from './t1.jsx';

const config = {
  red: {
    duration: 4000,
    next: 'green',
    backgroundColor: '#ff0000',
  },
  yellow: {
    duration: 500,
    next: 'red',
    backgroundColor: '#ffff00',
  },
  green: {
    duration: 3000,
    next: 'yellow',
    backgroundColor: '#00ff00',
  },
};

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Traffic Light State Machine</h1>
      <TrafficLight 
        initialColor="green" 
        config={config} 
        layout="vertical" 
      />
    </div>
  );
}

export default App;
