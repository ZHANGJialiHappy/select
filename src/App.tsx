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
  {label:"Eighth", value: "8"},
  {label:"First", value: "9"},
  {label:"Second", value: "10"},
  {label:"Third", value: "11"},
  {label:"Fourth", value: "12"},
  {label:"Fifth", value: "13"},
  {label:"Sixth", value: "14"},
  {label:"Seventh", value: "15"},
  {label:"Eighth", value: "16"},
  {label:"First", value: "17"},
  {label:"Second", value: "18"},
  {label:"Third", value: "19"},
  {label:"Fourth", value: "20"},
  {label:"Fifth", value: "21"},
  {label:"Sixth", value: "22"},
  {label:"Seventh", value: "23"},
  {label:"Eighth", value: "24"},

]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0])

  return (
    <div className="App">
      <Select options={options} value={value} onChange={option => setValue(option)}/>
    </div>
  )
}

export default App
