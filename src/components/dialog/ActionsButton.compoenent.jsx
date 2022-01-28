import "./ActionsButton.styles.scss"

export default ({ content, color, onClick, setIsOpen }) => {
  return (
    <button
      className={`action-button ${color === "#F3F3F1" && "black"}`}
      style={{ background: color }}
      onClick={() => {
        if (onClick) onClick()
        else setIsOpen(false)
      }}
    >
      {content}
    </button>
  )
}
