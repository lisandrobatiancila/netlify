import './App.css';
import IMG1 from './image/img1.jpg';

function App() {
  return (
    <section>
      <div className="header-container">
        <h1>welcome to netlify first image</h1>
        <img src={IMG1} alt='home page assets' width={500} height={200} />
      </div>
    </section>
  );
}

export default App;
