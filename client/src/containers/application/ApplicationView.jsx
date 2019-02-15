import React from 'react'
import './application.scss'

function InputField (props) {
  return <div>
    <label>
      {props.label}
    </label>
    <input onChange={props.valueChanged} type="text" value={props.value} ></input>
  </div>
}
export default function ApplicationView(props) {
console.log(props)
  return <div className="application-view">
    <InputField valueChanged={props.nameChanged} 
        label="Namn" 
        value={props.name}/>
    <InputField valueChanged={props.ageChanged} 
        label="Ålder" 
        value={props.age}/>
    <InputField valueChanged={props.amountChanged}
        label="Belopp"
        value={props.amount}/>
    <InputField valueChanged={props.durationChanged}
        label="Hur länge?"
        value={props.duration}/>
    <InputField valueChanged={props.reasonChanged}
        label="Orsak"
        value={props.reason}/>
        <button onClick={props.onClick}>
       Ansök</button>
   
  </div>
}
