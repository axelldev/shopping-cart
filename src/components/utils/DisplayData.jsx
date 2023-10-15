import '../../styles/DisplayData.css'

export function DisplayData ({ data }) {
  const formattedData = JSON.stringify(data, null, 2)
  return (
    <div className='display-data'>
      {formattedData}
    </div>
  )
}
