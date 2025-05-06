import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="content">
        <h1>Bem-vindo à Hivox!</h1>
        <p>Escolhe um menu abaixo para começar a ouvir.</p>
      </div>
      <nav className="bottom-nav">
        <a href="#" className="active">
          <img src="https://img.icons8.com/ios-filled/50/00b386/home.png" alt="Início" />
          <span>Início</span>
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios/50/book.png" alt="Catálogo" />
          <span>Catálogo</span>
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios/50/headphones.png" alt="Favoritos" />
          <span>Favoritos</span>
        </a>
        <a href="#">
          <img src="https://img.icons8.com/ios/50/user.png" alt="Perfil" />
          <span>Perfil</span>
        </a>
      </nav>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
