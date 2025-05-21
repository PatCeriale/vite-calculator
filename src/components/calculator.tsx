import React from 'react';
import { useState } from 'react';

const buttonValues = [
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '+', type: 'operation' },
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operation' },
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '*', type: 'operation' },
  { label: 'Clear', type: 'clear' },
  { label: '0', type: 'number' },
  { label: 'Delete', type: 'delete' },
  { label: '/', type: 'operation' },
];
export default function Calculator() {
  const [displayValue1, setDisplayValue1] = useState('0');
  // const [displayValue2, setDisplayValue2] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (value: string) => {
    if (displayValue1 === '0') {
      setDisplayValue1(value);
    } else {
      setDisplayValue1(displayValue1 + value);
    }
  };
  const sum = (a: number, b: number) => {
    return a + b;
  };
  const subtract = (a: number, b: number) => {
    return a - b;
  };
  const divide = (a: number, b: number) => {
    return a / b;
  };
  const multiply = (a: number, b: number) => {
    return a * b;
  };

  const handleEqualsClick = (value: string) => {
    if (operation === '') {
      return;
    }
    // setDisplayValue1('Huzzah!');
    let numberOne = value.split(operation)[0];
    let numberTwo = value.split(operation)[1];

    switch (operation) {
      case '+':
        setDisplayValue1(
          sum(parseInt(numberOne), parseInt(numberTwo)).toString()
        );
        break;
    }
    setOperation('');
  };

  const handleOperationClick = (value: string) => {
    setOperation('');
    switch (value) {
      case 'Clear':
        setDisplayValue1('0');
        break;
      case 'Delete':
        displayValue1 !== '0'
          ? setDisplayValue1(displayValue1.slice(0, displayValue1.length - 1))
          : null;
        break;
      case '+':
        setOperation('+');
        setDisplayValue1(displayValue1 + value); //TODO: Add validation
        // setDisplayValue1(value);
        break;
      case '-':
        setOperation('-');
        setDisplayValue1(displayValue1 + value); //TODO: Add validation
    }
  };

  return (
    <div className='calculator-container'>
      <h1>TI-84</h1>
      {/* <h1>ArithranomeNaN</h1> */}
      <div className='calculator'>
        <button
          onClick={() => {
            console.log(displayValue1);
            console.log(operation);
          }}
        >
          log displayValue1
        </button>
        <div className='calculator-display'>
          <input
            value={displayValue1}
            type='text'
            // onChange={(e) => setDisplayValue1(e.target.value)}
            readOnly
          />
        </div>
        <div>
          {buttonValues.map((number) => (
            <button
              key={number.label}
              className='calculator-button'
              style={
                operation === number.label ? { backgroundColor: 'blue' } : {}
              }
              onClick={
                //() => handleNumberClick(number.label.toString())
                number.type === 'number'
                  ? () => handleNumberClick(number.label.toString())
                  : // : number.type === 'operation'
                    // ? () => handleNumberClick(number.label.toString())
                    () => handleOperationClick(number.label)
              }
            >
              {number.label}
            </button>
          ))}
        </div>
        <div>
          <button
            key={'='}
            className='calculator-button-equals'
            onClick={() => handleEqualsClick(displayValue1)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
