import logo from './logo.svg';
import './App.css';
import Circulo from './components/Circulo';
import Producto from './components/Producto';

function App() {
  const circulos = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' },
    { color: 'green' },
    { color: 'purple' },
    { color: 'black' },
    { color: 'orange' },
    { color: 'pink' },
    { color: 'brown' },
    { color: 'gray' },
  ]

  // el map significa: a cada elemento del array, se le aplicará la función que se encuentra dentro del map

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Producto />
      {circulos.map((circulo, index) => {
        return <Circulo key={index} color={circulo.color} />
      })}
    </div>
  );
}

export default App;
