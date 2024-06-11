import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState ('light');

  const [btnText,newbtnText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black';
      document.body.style.color='white';
      newbtnText("Enable Light Mode");
    } else {
      setMode('light');
      document.body.style.background='white';
      document.body.style.color='black';
      newbtnText("Enable Dark Mode");
    }
  }

  // const btntext = () => {
  //   if (mode === 'light') {
  //     newbtnText('dark');
  //     document.body.style.background='black';
  //     document.body.style.color='white';
  //   } else {
  //     newbtnText('light');
  //     document.body.style.background='white';
  //     document.body.style.color='black';
  //   }
  // }
  return (
    <>
      <Navbar title="GIT" mode={mode} toggleMode={toggleMode} btntext={btnText}/>
      <TextForm heading = "Enter your Text Here" toggleMode={toggleMode} mode={mode}/>
    </>
  );
}
export default App;
