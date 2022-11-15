import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <Box sx = {{ flexGrow : 0}} style={{ display: "flex", alignItems: "baseline"}}>
            <AppBar sx = {{bgcolor:"#1DE8B5"}} position="sticky">
                <Toolbar>
                    <Typography variant="overline">
                        Inventory Management System
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="overline">
                        <NavLink to="/home" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? '#1DE8B5' : '#1DE8B5',
                            })}>
                            Home
                        </NavLink>
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="overline"  text-align="left">
                        <NavLink to="/inventory" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? '#1DE8B5' : '#1DE8B5',
                            })}>
                            Inventory
                        </NavLink>
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="overline"  text-align="left">
                        <NavLink to="/aboutus" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? '#1DE8B5' : '#1DE8B5',
                            })}>
                            About Us
                        </NavLink>
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="overline"  text-align="left">
                        <NavLink to="/contact" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? '#1DE8B5' : '#1DE8B5',
                            })}>
                            Contact
                        </NavLink>
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Typography variant="overline"  text-align="left">
                        <NavLink to="/" style={({ isActive }) => ({
                            color: isActive ? 'white' : '',
                            background: isActive ? '#1DE8B5' : '#1DE8B5',
                            })}>
                            Sign Out
                        </NavLink>
                    </Typography>     
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Home;