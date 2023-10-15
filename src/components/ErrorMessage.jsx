import '../styles/ErrorMessage.css'

export function ErrorMessage ({ message }) {
  return (
    <div className='error-container'>
      <p className='error-message'>{message}</p>
    </div>
  )
}
