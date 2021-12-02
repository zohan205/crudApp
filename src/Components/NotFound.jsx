import React from 'react';
import notfound from '../Assets/Images/NotFound.jpg'

const NotFound = () => {
    const vodor = {
        width: '70%',
        margin: '0 0 0 15%'
    }
    return (
        <div>
            <img src={notfound} alt="404 Not Found" style={vodor} />
        </div>
    )
}

export default NotFound
