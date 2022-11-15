import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <div>
            <Box sx = {{ flexGrow : 0}} style={{ display: "flex", alignItems: "baseline"}}>
            <AppBar sx = {{bgcolor:"#1DE8B5"}} position="sticky">
                <Toolbar>
                    <Typography variant="overline" style={{color:'black',fontWeight:"bold",fontSize:'15px'}}>
                        Inventory Management System
                    </Typography>
                    <Typography variant="overline">
                        &nbsp;&nbsp;&nbsp;
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
        <div>
            <br />
           <div style={{margin:'10px'}}>Mail : 19eucs179@skcet.ac.in</div>
            <br />
            <div style={{margin:'10px'}}>Contact : 9876543210</div>
            <br />
            <div style={{margin:'10px'}}>Location : Tamil Nadu</div>
            </div>
        </div>
    //   <img src="https://www.warehouseanywhere.com/resources/inventory-management/warehouse-anywhere-inventory-management-1.jpg" width="100px"></img>
    )
}

export default Contact;