"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import axios from 'axios';
import React from 'react'

function Provider({children}) {
const {user} = useUser();
const [userDetail,setUserDetail] = useState();

useEffect(() => {
    user && CreateNewUser();
}, [user]);

    const CreateNewUser=()=>{
        const result = await axios.post('api/user', {
            name:user?.fullName,
            email:user?.primaryEmailAddress[0]?.emailAddress});
            console.log("result", result.data);
            setUserDetail(result.data);
  return (
<UserDetailContext.Provider value={{userDetail, setUserDetail}}>
    <div>{children}</div>
</UserDetailContext.Provider>
  )
}

export default Provider