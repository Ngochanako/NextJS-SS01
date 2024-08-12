import { faCoffee, faEye, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Bai10() {
  return (
    <div>
      <h2>Bài 10</h2>
      <div style={{display:"flex",gap:"20px"}}>
      <FontAwesomeIcon icon={faCoffee}  style={{ width: "40px", height: "40px" }} />
      <FontAwesomeIcon icon={faEye}style={{ width: "40px", height: "40px" }} />
      <FontAwesomeIcon icon={faSave}style={{ width: "40px", height: "40px" }} />
      </div>
      
    </div>
  )
}
