import React from 'react';
import { useUserProfile } from '../../provider/profileProvider';

const UserDetail = () => {

    const { profile } = useUserProfile();

    return (
        <div className='user-detail w-100 p-3 d-flex flex-column gap-2'>
            <h3 className='text-capitalize head-text'>Account Details</h3>
            <div className='user-image w-100 d-flex'>
                <img src={profile?.picture} alt="" />
            </div>
            <label className="form-label p-0 m-0 text-capitalize">Full Name</label>
            <input type="text" value={profile?.name} readOnly className="form-control" />
            <label className="form-label p-0 m-0 text-capitalize">Email</label>
            <input type="email" value={profile?.email} readOnly className="form-control" />
        </div>
    );
}

export default UserDetail;