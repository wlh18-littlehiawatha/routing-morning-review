import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
   return(
      <div className='header'>
         <h2>Nice To Meet Me</h2>
         <Link to='/'> {`< Back to the Conference Room`}  </Link>
      </div>
   )
}

export default Header