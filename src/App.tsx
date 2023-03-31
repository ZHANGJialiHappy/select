import { useState } from "react"
import { Select } from "./Select"

const options=[
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: ""},
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: ""},
  {label:"First", value: "1"},
  {label:"Second", value: "2"},
  {label:"Third", value: "3"},
  {label:"Fourth", value: "4"},
  {label:"Fifth", value: "5"},
  {label:"Sixth", value: "6"},
  {label:"Seventh", value: "7"},
  {label:"Eighth", value: "8"},

]

function App() {
  const [value, setValue] = useState(options[0])

  return (
    <div className="App">
      <Select options={options} value={value}/>
    </div>
  )
}

export default App
