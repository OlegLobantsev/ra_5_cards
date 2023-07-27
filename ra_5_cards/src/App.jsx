/* eslint-disable react/no-unescaped-entities */
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Cards image="https://funart.pro/uploads/posts/2021-04/1617392795_41-p-oboi-domik-u-reki-42.jpg">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://www.yandex.ru/" className="btn btn-primary">Go somewhere</a>
      </Cards>
      <Cards>
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://www.yandex.ru/" className="btn btn-primary">Go somewhere</a>
      </Cards>
    </div>
  );
}

export default App;