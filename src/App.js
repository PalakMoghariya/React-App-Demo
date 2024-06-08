import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState ('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black';
    } else {
      setMode('light');
      document.body.style.background='white';
    }
  }
  return (
    <>
      <Navbar title="GIT" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading = "Enter your Text Here" />
    </>
  );
}
export default App;
