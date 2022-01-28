import { Edit, Trash } from "react-feather"
import Dialog from "../dialog/Dialog.component"

import "./MainTableRow.styles.scss"

export default ({ value, index, selected, setSelected }) => {
  let deleteDialogAttributes = {
    Icon: Trash,
    title: "Delete Row?",
    content: "This action cannot be udone, \n Do you want to continue",
    actions: [
      {
        content: "Cancel",
        color: "#F3F3F1",
      },
      {
        content: "Delete Row",
        color: "#D90C34",
      },
    ],
  }
  let editDialogAttributes = {
    Icon: Edit,
    title: "Edit row information",
    content: "",
    actions: [
      {
        content: "Cancel",
        color: "#F3F3F1",
      },
      {
        content: "Save changes",
        color: "#FF8514",
      },
    ],
  }
  return (
    <tr
      onClick={() => setSelected()}
      className={selected.includes(index) && "selected"}
    >
      <td>
        <input
          checked={selected.includes(index)}
          onChange={() => setSelected()}
          type="checkbox"
        />
      </td>
      <td>
        <div>{value.valueDate}</div>
      </td>
      <td>
        <div>{value.TransactionId}</div>
      </td>
      <td>
        <div>{value.movementType}</div>
      </td>
      <td>
        <div>{value.amount}</div>
      </td>
      <td>
        <div>{value.Status}</div>
      </td>
      <td>
        <div>
          <Dialog {...editDialogAttributes} />
          <Dialog {...deleteDialogAttributes} />
        </div>
      </td>
    </tr>
  )
}
