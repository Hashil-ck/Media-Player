import React from 'react'
import { Link } from 'react-router-dom'

function WatchingHistory() {
  return (
    <>
    <div className="d-flex justify-content-between mt-5 mb-5 container align-items-center">
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center ' style={{textDecoration:'none', color:'white', fontSize:'20px'}}><i className="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
    </div>
    <div className="container  mt-5 mb-5">
      <table className='table rounded shadow'> 
<thead>
  <tr>
    <th>#</th>
    <th>Caption</th>
    <th>URL</th>
    <th>Time Stamp</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td></td>
    <td><a href=""></a></td>
    <td></td>
  </tr>
</tbody>
      </table>
    </div>
    </>
  )
}

export default WatchingHistory