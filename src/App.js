import React, {useState} from 'react';
import './App.css';
import "../src/HW1/userOutput.css";
import UserOutput from '../src/HW1/userOutput';
import UserInput from '../src/HW1/userInput';


const App = props => {

 const [userName, setUserName] = useState({
    persons: [
      {id: "abc1",
       name: "Alyx",
       age: 23},
      {id: "abc2",
       name: "Smith",
       age: 43},
       {id: "abc3",
       name: "Angela",
       age: 25},
       {id: "abc4",
       name: "Jack",
       age: 17},
    ]
  });

  const [showPersons, setShowPersons] = useState(false);
  let personList = null;

  const changeName = (event) =>{
    event.preventDefault();

    const personIndex = userName.persons.findIndex(p => {return p.id === event.target.name})

    const person = {...userName.persons[personIndex]}
    person.name = event.target.value;

    const persons = [...userName.persons];
    persons[personIndex] = person;

    setUserName({persons: persons})
  
    };

    const toggleSwitch = (e) =>{
      setShowPersons(!showPersons);
    }

    if (showPersons) {
      let nameIndex = -1;
      personList = (
        <div>
        {userName.persons.map((person, index) => {
          nameIndex++;
          return(<div>
            <UserOutput click={() => deletePerson(index)} className={"Text" + nameIndex % 2} 
            userName={person.name} age={person.age} key={person.id}/>
            <UserInput name={person.id} userName={person.name} changeName={(event) => changeName(event)}/>
            </div>)
        })}
        </div>
      );
    }

    const deletePerson = (personIndex) => {
      //const list = userName.persons.slice();
      const list = [...userName.persons]
      list.splice(personIndex, 1);
      console.log(list)
      setUserName({persons: list});
    } 

  return (
    <div className="App" style={{paddingTop: 10}}>
      <h1>{userName.persons.length} person found in list.</h1>
      <button onClick={(e) => toggleSwitch(e)}>{showPersons? "hide":"show"}</button>
      {personList} 
    </div>

  );
}

export default App;
