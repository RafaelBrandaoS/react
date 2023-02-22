import './App.css'
import OutraLista from './components/OutraLista'

function App() {

  const meusItens = ['html', 'css', 'javaScript']
  const maisItens = []

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={maisItens}/>
    </div>
  )
}

export default App
