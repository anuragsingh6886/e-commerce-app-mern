import React from 'react';
import { useUserProfile } from '../../provider/profileProvider';

const UserDetail = () => {

    const { profile } = useUserProfile();

    return (
        <div>
            <p>UserDetail</p>
            <p>Email: {profile?.email}</p>
            <p className='text-capitalize'>Name: {profile?.name}</p>
            <p>Profile picture: <img src={profile?.picture} alt="" style={{ width: '100px' }} /></p>
        </div>
    );
}

export default UserDetail;