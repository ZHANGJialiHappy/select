import { useState } from "react"
import { Select, SelectOption } from "./Select"

const options = [
  { label: "First", value: "1" },
  { label: "Second", value: "2" },
  { label: "Third", value: "3" },
  { label: "Fourth", value: "4" },
  { label: "Fifth", value: "5" },
  { label: "Sixth", value: "6" },
  { label: "Seventh", value: "7" },
  { label: "Eighth", value: "8" },
  { label: "First", value: "9" },
  { label: "Second", value: "10" },
  { label: "Third", value: "11" },
  { label: "Fourth", value: "12" },
  { label: "Fifth", value: "13" },
  { label: "Sixth", value: "14" },
  { label: "Seventh", value: "15" },
  { label: "Eighth", value: "16" },
  { label: "First", value: "17" },
  { label: "Second", value: "18" },
  { label: "Third", value: "19" },
  { label: "Fourth", value: "20" },
  { label: "Fifth", value: "21" },
  { label: "Sixth", value: "22" },
  { label: "Seventh", value: "23" },
  { label: "Eighth", value: "24" },

]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl mb-3">MULTIPLE SELECTOR</h1>
        <Select
          multiple
          options={options}
          value={value1}
          onChange={option => setValue1(option)} />

        <div className="text-2xl mb-3 mt-5">SINGLE SELECTOR</div>
        <Select
          options={options}
          value={value2}
          onChange={option => setValue2(option)} />
      </div>
    </div>
  )
}

export default App
