import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Tooltip } from 'react-tooltip';

const Avatar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="avatar">
            <div 
                className="ring-primary ring-offset-base-100 w-[40px] h-[40px] rounded-full ring-2 ring-offset-2"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="bottom"
            >
                <img referrerPolicy='no-referrer' src={user?.photoURL} />
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Avatar;