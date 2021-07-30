import React, {Component} from 'react'
import UserListItemHW from '../UserListItemHW'

const dbUsers = [
    {
        firstName: 'Name',
        lastName: 'Surname',
        age: 20,
        id: 1,
        imgSrc: 'https://images.assetsdelivery.com/compings_v2/gmast3r/gmast3r1506/gmast3r150600130.jpg',
    },
    {
        firstName: 'Name',
        lastName: 'Surname',
        age: 25,
        id: 2,
        imgSrc: 'https://lh3.googleusercontent.com/0zcIgnobOs_jghNkIIEiunupDwuGciE_1meZa2PI1dOEKPaiMWuzc9oVAr8wvVutS9BRJdwN9N2lxsbHVEdpe96AWw=w640-h400-e365-rj-sc0x00ffffff',
    },                
    {
        firstName: 'Name',
        lastName: 'Surname',
        age: 36,
        id: 3,
        imgSrc: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
    },                
    {
        firstName: 'Name',
        lastName: 'Surname',
        age: 45,
        id: 4,
        imgSrc: 'https://media.wired.com/photos/5bb6accf0abf932caf294b18/125:94/w_2375,h_1786,c_limit/waves-730260985.jpg',
    }
]

class UsersListHW extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: dbUsers.map(u => ({...u, isSelected: false})),            
        }
    }

    generateUsers = (user, index) => {
        const {users} = this.state;
        
        const deleteUser = () => {
            const newUsersArray = [...users];
            newUsersArray.splice(index, 1);
            this.setState({users: newUsersArray});
            console.log(newUsersArray); 
            console.log(this.state.users); 
        }
     
        return <UserListItemHW 
        data={user}          
        key={user.id}                       
        deleteUser={deleteUser}/>;
    };

    render() {
        const {users} = this.state; 
        return <ul>{users.map(this.generateUsers)}</ul>;
    }
}

export default UsersListHW;