/* Estilos Globais */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f8f8f5;
  color: #333;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.search-bar {
  flex: 1;
  margin: 0 12px;
}

.search-bar input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.actions button {
  background: none;
  border: none;
  margin-left: 10px;
}

.actions img {
  width: 24px;
  height: 24px;
}

.banner-tv {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.banner-tv img {
  width: 90%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

/* Livros */
.books-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  padding: 0 10px;
}

.book {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  width: 120px;
  transition: transform 0.3s;
}

.book img {
  width: 64px;
  height: 64px;
}

.book:hover {
  transform: scale(1.05);
}

.tag {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #00b386;
}

/* Barra Inferior */
.bottom-nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  width: 90%;
  max-width: 400px;
  padding: 8px 0;
}

.bottom-nav a {
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}

.bottom-nav a img {
  width: 24px;
  height: 24px;
}

.bottom-nav a.active span {
  color: #00b386;
  font-weight: bold;
}

/* Modal Login */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
  text-align: center;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.login-btn {
  background-color: #00b386;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
