import { useState } from 'react'
import './App.css'


const digitStyle = 'w-16 h-10 bg-slate-500'
const controlStyle = 'w-14 h-10 bg-slate-600'

function App() {

  const [ display, setDisplay ] = useState(0)

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <div className='bg-lime-50 flex flex-col justify-center items-center p-5'>
        <div id='display' className='bg-slate-700 w-full h-14 text-xl float-right text-white text-right p-3'>{display}</div>
        <div className='text-lg text-white'>
          <button id="clear" className="w-48 h-10 bg-red-500">AC</button>
          <button id="divide" className={controlStyle}>/</button>
          <br/>
          <button id="seven" className={digitStyle}>7</button>
          <button id="eight" className={digitStyle}>8</button>
          <button id="nine" className={digitStyle}>9</button>
          <button id="multiply" className={controlStyle}>X</button>
          <br/>
          <button id="four" className={digitStyle}>4</button>
          <button id="five" className={digitStyle}>5</button>
          <button id="six" className={digitStyle}>6</button>
          <button id="add" className={controlStyle}>+</button>
          <br/>
          <button id="one" className={digitStyle}>1</button>
          <button id="two" className={digitStyle}>2</button>
          <button id="three" className={digitStyle}>3</button>
          <button id="subtract" className={controlStyle}>-</button>
          <br/>
          <button id="zero" className={digitStyle}>0</button>
          <button id="decimal" className={digitStyle}>.</button>
          <button id="equals" className='w-[120px] h-10 bg-blue-600'>=</button>
        </div>
        <div>
          <p>Designed and developed by <a href="http://github.com/lawielas">Lawal</a></p>
        </div>
      </div>
    </div>
  )
}

export default App
