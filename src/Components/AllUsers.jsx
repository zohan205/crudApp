import { Table,TableBody,TableCell,TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { getUsers, getAllUsers, deleteUser } from './Service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *' : {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    row : {
        '& > *' : {
            fontSize: 20
        }
    }
})

const AllUsers = () => {
    const papan = useStyle();

    const [users, setUsers ] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[])


    const getAllUsers = async () =>{
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={papan.table} >
            <TableHead>
                <TableRow className={papan.thead} >
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow key={user.id} className={papan.row} >
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Link style={{ textDecoration: "none" }} to={`/edit/${user.id}`} ><Button variant="contained" color="primary" style={{ marginRight: 10 }}  >Edit</Button></Link>
                                <Button onClick={()=>deleteUserData(user.id)} variant="contained" color="secondary" >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
