import react, { useState } from "react"
const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, setValues] = useState(initialValue)

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessMessage(true)
  }
  return [handleSubmit, handleChanges, showSuccessMessage, values]
}
export default useForm
