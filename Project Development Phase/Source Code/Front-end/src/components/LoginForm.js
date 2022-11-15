import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockPersonOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
    // useEffect(() => {
    //     // fetch('/details').then(
    //     //     res => res.json()
    //     //     ).then(
    //     //         data => console.log(data)
    //     //     )
    //     // console.log('hello')
    //     axios.post('app/details').then(res => res.json()
    //     ).then(
    //         data => console.log(data)
    //     )
    // },[])

    const colorStyle = {backgroundColor : "rgb(27, 208, 162)"}
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('inventory')
    }
    return (
        <div className="form-page">
           <Paper elevation={10} className="form-paper">
                <Grid align="center">
                    <Avatar style={colorStyle}><LockPersonOutlined /></Avatar>
                    <h3 className="form-title">Login</h3>
                    <TextField label="Email" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Password" size="small" type="password" required></TextField>
                    <br /><br />
                    <Button color="success" variant="contained" style={colorStyle}
                        onClick={handleClick}>
                        Login
                    </Button>
                    <br /><br />
                    <Grid align="right">
                        <Link to="home">Forgot Password?</Link>
                        <br /><br />
                        <Link to="register">Haven't registered yet? Sign Up</Link>
                    </Grid>           
                </Grid>
           </Paper>
        </div>
    );
}

export default LoginForm;