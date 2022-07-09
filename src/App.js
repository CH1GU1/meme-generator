import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [line1, setLine1] = new useState('');
  const [line2, setLine2] = new useState('');
  const [image, setImage] = new useState('');

  const onChangeLine1 = function(event){
    
    setLine1(event.target.value);
  }

  const onChangeLine2 = function(event){

    setLine2(event.target.value);
  }

  const onChangeImage = function(event){

    setImage(event.target.value);
  }

  const exportImg = function(event){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'memeExported.png';
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire" key="">Casa en llamas</option>
        <option value="futurama" key="">Futurama</option>
        <option value="history" key="">History</option>
        <option value="matrix" key="">Matrix</option>
        <option value="philosoraptor" key="">Philosoraptor</option>
        <option value="smart" key="">Smart Guy</option>
      </select> <br/>

      <input onChange={onChangeLine1} type="text" placeholder='Line 1'/> <br/>
      <input onChange={onChangeLine2} type="text" placeholder='Line 2'/> <br/>
      <button onClick={exportImg}>Export</button>

      <div className='meme' id='meme'>
        <span>{line1}</span> <br/>
        <span>{line2}</span> <br/>
        <img src={"/img/"+ image +".jpg"}/>
      </div>

    </div>
  );
}

export default App;
