import './App.css';

function App() {
    const name = 'Rafael'
    const newName = name.toUpperCase()

    function soma(a, b) {
      return a + b
    }

    const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>soma: {soma(1, 4)}</p>
      <img src={url} alt='minha imagem'/>
    </div>
  );
}

export default App;
