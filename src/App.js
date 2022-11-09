import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';


function App() {
  return (
    <div className="App">
      
      <h2>Iteration 1</h2>      
      <IdCard 
        lastName='Doe' 
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className="separador"></div>

      <h2>Iteration 2</h2>  
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <div className="separador"></div>

      
      <h2>Iteration 3</h2>  

      <div className="separador"></div>

      
      <h2>Iteration 4</h2>  

      <div className="separador"></div>

      
      <h2>Iteration 5</h2>  

      <div className="separador"></div>

      
      <h2>Iteration 6</h2>  

      <div className="separador"></div>

      
      <h2>Iteration 7</h2>  

      <div className="separador"></div>
    </div>
  );
}

export default App;
