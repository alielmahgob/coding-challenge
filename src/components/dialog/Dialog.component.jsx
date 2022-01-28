import { useState } from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material"
import ActionsButton from "./ActionsButton.compoenent"

export default ({ Icon, title, actions, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Icon style={{ marginRight: "10px" }} onClick={() => setIsOpen(true)} />
      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {actions.map(action => (
            <ActionsButton setIsOpen={setIsOpen} {...action} />
          ))}
        </DialogActions>
      </Dialog>
    </>
  )
}
