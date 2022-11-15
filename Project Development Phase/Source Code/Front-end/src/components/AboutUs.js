import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function AboutUs() {
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
            <p className="paragraph">Retail inventory management is the process of ensuring you carry merchandise that shoppers want, with neither too little nor too much on hand. By managing inventory, retailers meet customer demand without running out of stock or carrying excess supply.
                In practice, effective retail inventory management results in lower costs and a better understanding of sales patterns. Retail inventory management tools and methods give retailers more information on which to run their businesses. Applications have been developed to help retailers track and manage stocks related to their own products. The System will ask retailers to create their accounts by providing essential details. Retailers can access their accounts by logging into the application.
                Once retailers successfully log in to the application they can update their inventory details, also users will be able to add new stock by submitting essential details related to the stock. They can view details of the current inventory. The System will automatically send an email alert to the retailers if there is no stock found in their accounts.  So that they can order new stock.
            </p>
        </div>
    )
}

export default AboutUs;