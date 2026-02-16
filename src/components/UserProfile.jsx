import React from 'react';

const UserProfile = ({ name, role, avatar }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-orange-100 rounded-full p-1">
                <img
                    src={avatar || "https://ui-avatars.com/api/?name=User&background=random"}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
            <div className="hidden md:block">
                <h3 className="text-sm font-bold text-gray-900 leading-none">{name}</h3>
                <p className="text-xs text-gray-500 mt-1">{role}</p>
            </div>
        </div>
    );
};

export default UserProfile;
