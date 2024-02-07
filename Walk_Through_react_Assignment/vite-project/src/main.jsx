import React from 'react'
import ReactDOM from 'react-dom/client'
import Person from './App.jsx'
import Test from './test.jsx';
import Header from './header.jsx';
import List from './list.jsx';



const items = ["Item 1", "Item 2", "Item 3"];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person  name={"Raghib_Jamil"} age={15}/>
    <Test text="Click me" />
    <Header title="this is title text"/>
    <List  item={items}/>
  </React.StrictMode>,
)
