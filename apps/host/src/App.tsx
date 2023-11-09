import reactLogo from './assets/react.svg'
import './App.css'
import Button from 'remoteApp/Button';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Host App</h1>
      <div className="card">
        <p>This button is imported from the remote</p>
        <Button />
      </div>
    </div>
  )
}

export default App
