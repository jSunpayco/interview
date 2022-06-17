import './App.css';
import {useRef} from 'react';
import Toast from "./components/Toast";

const MessageState = {
  success: "success",
  fail: "fail",
};

function App() {
  const toastRef = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Toast ref={toastRef} message="Success!" type={MessageState.success}/>
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
                <input type="text" placeholder="First Name*"/> <input type="text" placeholder="Email*"/> <button
                 onClick={() => {toastRef.current.show();}}>Schedule Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
