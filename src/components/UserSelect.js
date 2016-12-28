import React, { PropTypes } from 'react';

const UserSelect = ({ Users, onChange }) => {
    return (
        <div>
            <select className="browser-default" onChange={e => {
                //12.28 - useing class browser default because meterialize changes how selects work and the onChange event doesnt fire.
                onChange(e.target.value);
            } }>
                {Users.map(user =>
                    <option key={user.name}>{user.name}</option>
                )}
            </select>
        </div>
    );
};

UserSelect.propTypes = {
    Users: PropTypes.array,
    onChange: PropTypes.func
};

export default UserSelect;