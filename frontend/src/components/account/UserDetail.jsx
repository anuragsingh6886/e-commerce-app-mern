import React from 'react';
import { useUserProfile } from '../../provider/profileProvider';

const UserDetail = () => {

    const { profile } = useUserProfile();

    return (
        <div className='user-detail w-100 p-3 d-flex flex-column gap-3'>
            <h3 className='text-capitalize '>Account Details</h3>
            <div className='user-image w-100 d-flex'>
                <img src={profile?.picture} alt="" style={{ width: '100px' }} />
            </div>
            <label className="form-label">Email</label>
            <input type="email" value={profile?.email} readOnly className="form-control" />
            <label className="form-label">Name</label>
            <input type="text" value={profile?.name} readOnly className="form-control" />
        </div>
    );
}

export default UserDetail;