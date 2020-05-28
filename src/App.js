import React,{useState} from 'react';
import './App.css';
import './inventory.js';
import ProductImage from './components/ProductImage';

// function ProductImage(props){
//   return <img src={process.env.PUBLIC_URL +`/assets/${props.color}.jpg`} alt="logo"  width="400px" height="400px"/>;
// }



function SizeSelector(props){
  function sizeOptions(){
    //var sizes = window.Inventory.allSizes;
    return props.sizes.map(num =>{
      return (
      <option value={num} key={num}>{num}</option>
      );
    });
  }
  function onSizeChange(e){
    //console.log(e.target.value);
    props.SizeChange(e.target.value);
  }
  return (
    <div className="field-group"> 
      <label htmlFor="size-option">Size</label>
      <select name="size-option" id="sizeOptions" defaultValue={props.size} onChange={onSizeChange}>
          {sizeOptions()}
      </select>
    </div>
  )
}

function ColorSelector(props){
  function colorOptions(){
    //var sizes = window.Inventory.allSizes;
    return props.colors.map(num =>{
      return (
      <option value={num} key={num}>{num}</option>
      );
    });
  }
  function onColorChange(e){
    props.ColorChange(e.target.value,'hello');
  }

  return (
    <div className="field-group"> 
      <label htmlFor="color-option">Color</label>
      <select name="color-option" id="colorOptions" defaultValue={props.color} onChange={onColorChange}>
          {colorOptions()}
      </select>
    </div>
  )
}

function App() {
  const [size, setSize] = useState(8);
  const [sizes, setSizes] = useState(window.Inventory.allSizes);
  const [color, setColor] = useState("red");
  const [colors, setColors] = useState(window.Inventory.allColors);

  function handleSizeChange(selectedSize){
    var availableColor = window.Inventory.bySize[selectedSize];
    setColors(availableColor);
    setSize(selectedSize);

  }
  function handleColorChange(selectedColor){
    var availableSize = window.Inventory.byColor[selectedColor];
    setSizes(availableSize);
    setColor(selectedColor);
    //console.log(text);

  }
  return (
    <div className="App">
      <div className="product-image">
        <ProductImage  color={color}/>
      </div>
      <div className="size-selector">
        <SizeSelector size={size} sizes={sizes} SizeChange={handleSizeChange}/>
        <ColorSelector color={color} colors={colors} ColorChange={handleColorChange}/>
      </div>
    </div>
  );
}

export default App;
