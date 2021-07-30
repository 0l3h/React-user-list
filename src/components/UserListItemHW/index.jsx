import React from 'react'

function UserListItemHW(props) {
    const {data: {firstName, lastName, id, age, imgSrc, isSelected}, deleteUser} = props;
        

    const styles = {backgroundColor: '#ccc'};

    return (
        <li style={isSelected? styles : null}>
            <img src={imgSrc} alt="User's avatar"/>
            <span id="main-info">
                {firstName} {lastName}, {age}
                <br/>
                <span id="id">ID: {id}</span>
            </span>
            <br/>
            <input id="delete-button" onClick={deleteUser} type="image" src="https://icon-library.com/images/trash-can-icon-transparent/trash-can-icon-transparent-9.jpg" alt="delete"/>        </li>
    )
}

export default UserListItemHW;