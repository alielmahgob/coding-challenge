import { useState } from "react"
import Table from "../table/Table.component"
import MainTableRow from "./MainTableRow.component"

export default () => {
  const [selected, setSelected] = useState([])
  const tableAttributes = {
    selected: selected,
    setSelected: setSelected,
    givenArray: [
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
      {
        valueDate: "2022-01-14",
        TransactionId: "123123123",
        movementType: "Airtime",
        amount: "1,500.00$",
        Status: "active",
      },
    ],
    columns: [
      "Value Date",
      "Transcation ID",
      "Movement Type",
      "Amount",
      "Status",
      "Action",
    ],
    row: (value, index) => (
      <MainTableRow
        value={value}
        index={index}
        setSelected={() => {
          if (!selected.includes(index)) setSelected([...selected, index])
          else {
            let newArray = selected
            newArray.splice(selected.indexOf(index), 1)
            setSelected([...newArray])
          }
        }}
        selected={selected}
      />
    ),
  }
  return <Table {...tableAttributes} />
}
