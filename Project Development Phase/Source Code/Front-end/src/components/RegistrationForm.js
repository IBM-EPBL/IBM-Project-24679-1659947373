import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { LockPersonOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function RegistrationForm() {
    const colorStyle = {backgroundColor : "rgb(27, 208, 162)"}
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className="form-page">
           <Paper elevation={10} className="form-paper">
                <Grid align="center">
                    <Avatar style={colorStyle}><LockPersonOutlined /></Avatar>
                    <h3 className="form-title">Register</h3>
                    <TextField label="Email" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Username" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Password" size="small" type="password" required></TextField>
                    <br /><br />
                    <Button color="success" variant="contained" style={colorStyle}
                        onClick={handleClick}>
                        Register
                    </Button>
                    <br /><br />
                    <Grid align="right">
                        <Link to="/">Already have an account? Sign In</Link>
                    </Grid>           
                </Grid>
           </Paper>
        </div>
    );
}

export default RegistrationForm;