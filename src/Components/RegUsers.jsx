import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {deleteUser} from "./UpdateData"

function RegUsers({showUsers}) {
    const users = useSelector(state=>state.user.value);
    const dispatch = useDispatch();
    console.log("value inside reg",users)
  return (
    <div>
        {
         users &&   users.map((item,index)=>{
                return(
                    <div className='usersREnder'>
                        <div className="name">
                          First Name :  {item.datax.firstName}
                        </div>
                        <div className="name">
                         Last Name :   {item.datax.lastName}
                        </div>
                        <div className="name">
                          Email :    {item.datax.email}
                        </div>
                        
                    <input onClick={e=>dispatch(deleteUser({ind:index}))} type="button"  value="delete" className='btn'/>
                    </div>
                );
            })
        }
        <div><input className='btn' onClick={e=>showUsers()} type="button" value="Go Back"/></div>
    </div>
  )
}

export default RegUsers