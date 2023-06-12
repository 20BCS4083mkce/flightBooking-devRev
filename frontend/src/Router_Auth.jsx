import React, { useEffect, useState } from 'react'
import User_Index from './User_Index'
import { useHistory } from "react-router-dom"
import Admin_App from './Admin_App'

const Router_Auth = () => {
    const navigate = useHistory()
    const [admin, setAdmin] = useState(true)
    // useEffect(() => {
    //     if(localStorage.getItem('admin')){
            
    //     }
    // },[])

    return (
        <div>
            {
                admin
                    ?
                    (<User_Index setAdmin={setAdmin}/>)
                    :
                    (<Admin_App setAdmin={setAdmin}/>)
            }
        </div>
    )
}

export default Router_Auth