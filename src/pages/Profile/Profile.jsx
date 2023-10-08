import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'

const Profile = () => {
  const { user } = useAuth()
  return (
    <>
    <Helmet>
      <title>
        Profile | {user.displayName}
      </title>
    </Helmet>
    <div className='h-[90vh] pt-16 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className="avatar">
        <div className="w-36 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <div className='text'>
      <p>Name: {user.displayName? user.displayName:"No Phone number"}</p>
      <p>Email: {user.email? user.email:"No Phone number"}</p>
      <p>Phone: {user.phoneNumber? user.phoneNumber:"No Phone number"}</p>
      </div>
    </div>
    </>

  )
}

export default Profile