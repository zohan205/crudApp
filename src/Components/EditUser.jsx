import React ,{useState, useEffect } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from '@material-ui/core';
import { editUser, getEditUsers } from './Service/api';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

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

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(initialValues);
    const  { name, username, email, phone } = user;
    const papan = useStyle();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        const response = await getEditUsers(id);
        setUser(response.data);
    }

    const onVlaueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value });
    }

    const editUserDetails = async () => {
        await editUser(id,user);
        navigate('/all')
    }

    return (
        <FormGroup className={papan.container} >
            <Typography variant="h4" >Edit User</Typography>
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
            <Button variant="contained" onClick={ () => editUserDetails() } color="primary" >Edit User</Button>
        </FormGroup>
    )
}

export default EditUser
