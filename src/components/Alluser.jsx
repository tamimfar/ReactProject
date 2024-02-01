import React,{useContext} from 'react'
import { UserContext } from '../context/UserContext'
import CreateUser from './CreateUser'
const Alluser = () => {
	const {create, setCreate} = useContext(UserContext)
  return (
	<div>
	   <table id="customers">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
			    
			 <tr  >
               
				  <td>{ create.id }</td>
				  <td> {create.name }</td>
				  <td>{create.email }</td>
				  <td> { create.phon }</td>
				 
		  </tr>
		 
            
           
		  </table>
		 
	</div>
  )
}

export default Alluser
