import { Table as ReactstrapTable } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Table.styles.scss"

export default ({ columns, row, givenArray, selected, setSelected }) => {
  let array = [...Array(givenArray.length)]
  return (
    <ReactstrapTable striped responsive borderless={true}>
      <thead>
        <tr>
          <th>
            <input
              checked={selected.length === givenArray.length}
              onClick={() => {
                if (selected.length === givenArray.length) setSelected([])
                else {
                  let newArray = []
                  array.map((foo, index) => newArray.push(index))
                  setSelected(newArray)
                }
              }}
              type="checkbox"
            />
          </th>
          {columns.map(column => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{givenArray.map((value, index) => row(value, index))}</tbody>
    </ReactstrapTable>
  )
}
