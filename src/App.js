import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <div class='container'>
          <div class='child1'>
            <h2>Schedule a Demo</h2>
            <p>Learn More About FloQast</p>
          </div>
          <div class='child2'>
            <div className="mygrid">
              <div className="item">
                <h3>Learn How Floqast Can </h3> <h3 className='improve'> Improve Your Month-End</h3>
              </div>
              <div className="item">
                <input type="text" placeholder="First Name*"/> <input type="text" placeholder="Email*"/> <button>Schedule Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
