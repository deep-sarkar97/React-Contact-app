import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import AddContact from './components/addcontact';
import List from './components/contact';



function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts, setContacts]= useState(()=>{
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return contacts || [];
  });
  const addcontactHandler = (contact)=>{
    setContacts([...contacts, {contact }]);
    console.log(contacts)
    console.log(contact)
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (contacts) setContacts(contacts);
  }, []);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addcontactHandler={addcontactHandler}/>
      <List contacts={contacts}/>
    </div>
  );
};

export default App;
