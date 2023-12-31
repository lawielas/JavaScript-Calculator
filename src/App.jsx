import { useState } from 'react'
import './App.css'


const digitStyle = 'w-16 h-10 bg-slate-500'
const controlStyle = 'w-14 h-10 bg-slate-600'

function App() {

  const [ display, setDisplay ] = useState([''])
  const [ inputDisplay, setInputDisplay ] = useState([0])

  

  const handleClear = () => {
    setDisplay([''])
    setInputDisplay([0])
  }

  const handleDivide = (e) => {
    setDisplay([...display, e.target.innerText])
    setInputDisplay([e.target.innerText])
  }

  const handleAdd = (e) => {
    setDisplay([...display, e.target.innerText])
    setInputDisplay([e.target.innerText])
  }

  const handleSubtract = (e) => {
    setDisplay([...display, e.target.innerText])
    setInputDisplay([e.target.innerText])
  }

  const handleMultiple = (e) => {
    setDisplay([...display, e.target.innerText])
    setInputDisplay([e.target.innerText])
  }

  const handleDigitClick = (e) => {
    let temp = e.target.innerText

    if(temp === '0' && inputDisplay.length === 1){
      if(display.length === 1) {
        setDisplay([''])
        setInputDisplay([e.target.innerText])
      } else {
        setDisplay([...display, e.target.innerText])
        setInputDisplay([...inputDisplay, e.target.innerText])
      }
    } else {
      setDisplay([...display, e.target.innerText])
      temp = [...inputDisplay, e.target.innerText]
      if (temp[0] === 0 && e.target.innerText !== 0) {
        temp = temp.slice(1,)
      }
      setInputDisplay(temp)
      console.log(temp)
    }

    if(inputDisplay[0] === '/' || inputDisplay[0] === '+' || inputDisplay[0] === '-' || inputDisplay[0] === '*'){
      setInputDisplay([e.target.innerText])
    }

  }

  const handleDot = (e) => {
    if(!inputDisplay.includes('.')) {
        setDisplay([...display, e.target.innerText])
        setInputDisplay([...inputDisplay, e.target.innerText])
    }
  }

  const handleEqualClick = () => {
    let result = display.join('')
    result = eval(result)
    setInputDisplay(result)
    console.log(result)
  }

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <div className='bg-lime-50 flex flex-col justify-center items-center p-5'>
        <div className='bg-slate-700 w-full h-16 text-white text-right py-1 px-3'>
          <p className='text-base h-5'>{display}</p>
          <p  id='display' className='text-xl h-5'>{inputDisplay}</p>  
        </div>
        <div className='text-lg text-white'>
          <button id="clear" className="w-48 h-10 bg-red-500" onClick={handleClear}>AC</button>
          <button id="divide" className={controlStyle} onClick={handleDivide}>/</button>
          <br/>
          <button id="seven" className={digitStyle} onClick={handleDigitClick}>7</button>
          <button id="eight" className={digitStyle} onClick={handleDigitClick}>8</button>
          <button id="nine" className={digitStyle} onClick={handleDigitClick}>9</button>
          <button id="multiply" className={controlStyle} onClick={handleMultiple}>*</button>
          <br/>
          <button id="four" className={digitStyle} onClick={handleDigitClick}>4</button>
          <button id="five" className={digitStyle} onClick={handleDigitClick}>5</button>
          <button id="six" className={digitStyle} onClick={handleDigitClick}>6</button>
          <button id="add" className={controlStyle} onClick={handleAdd}>+</button>
          <br/>
          <button id="one" className={digitStyle} onClick={handleDigitClick}>1</button>
          <button id="two" className={digitStyle} onClick={handleDigitClick}>2</button>
          <button id="three" className={digitStyle} onClick={handleDigitClick}>3</button>
          <button id="subtract" className={controlStyle} onClick={handleSubtract}>-</button>
          <br/>
          <button id="zero" className={digitStyle} onClick={handleDigitClick}>0</button>
          <button id="decimal" className={digitStyle} onClick={handleDot}>.</button>
          <button id="equals" className='w-[120px] h-10 bg-blue-600' onClick={handleEqualClick}>=</button>
        </div>
        <div>
          <p>Designed and developed by <a href="http://github.com/lawielas">Lawal</a></p>
        </div>
      </div>
    </div>
  )
}

export default App
