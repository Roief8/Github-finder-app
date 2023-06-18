import { useContext } from "react"
import AlertContext from "../../context/alerts/AlertContext"

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className="flex-1 text-base font-semibold leading-7 mb-2 space-x-2">
        {alert.type === "error" && <strong>{alert.msg}</strong>}
      </p>
    )
  )
}

export default Alert
