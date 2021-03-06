import React ,{useState} from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from './Service/api';
import { useNavigate } from 'react-router';

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *' : {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: ""
}

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialValues);
    const  { name, username, email, phone } = user;
    const papan = useStyle();

    const onVlaueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value });
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all')
    }

    return (
        <FormGroup className={papan.container} >
            <Typography variant="h4" >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onVlaueChange(e)} name="name" value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onVlaueChange(e)} name="username" value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onVlaueChange(e)} name="email" value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onVlaueChange(e)} name="phone" value={phone} />
            </FormControl>
            <Button variant="contained" onClick={ () => addUserDetails() } color="primary" >Add User</Button>
        </FormGroup>
    )
}

export default AddUser
