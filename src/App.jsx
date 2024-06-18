// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table';
function App() {
 // const [count, setCount] = useState(0)

 const tableData = [

  {
    "rows": [
      {
        "id": "electronics",
        "label": "Electronics",
        "value": 1400, //this value needs to be calculated from the children values (800+700)
        "children": [
          {
            "id": "phones",
            "label": "Phones",
            "value": 800
          },
          {
            "id": "laptops",
            "label": "Laptops",
            "value": 700
          }
        ]
      },
      {
        "id": "furniture",
        "label": "Furniture",
        "value": 1000, //this need to be calculated from the children values (300+700)
        "children": [
          {
            "id": "tables",
            "label": "Tables",
            "value": 300
          },
          {
            "id": "chairs",
            "label": "Chairs",
            "value": 700
          }
        ]
      }
    ]
  }

 ];

  return (
    <div>
      {/* <p>Hello World</p> */}
    <Table data={tableData} />
    </div>
  )
}

export default App
