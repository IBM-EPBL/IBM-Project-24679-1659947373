import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography , Paper, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, id, price, quantity, date) {
    return { name, id, price, quantity, date };
  }
  
  const rows = [
    createData('Frozen yoghurt', 101, 100, 4,'12/10/2022'),
    createData('Ice cream sandwich', 102, 150, 7, '04/11/2022'),
    createData('Eclair', 103, 40, 2, '06/11/2022'),
    createData('Cupcake', 104, 70, 6, '08/11/2022'),
    // createData('Toothpaste', 105, 110, 3, '14/11/2022')
  ];


function Inventory() {
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate('/addform')
  }
  const handleUpdate = () => {
    navigate('/updateform')
  }
  const handleDelete = () => {
    navigate('/deleteform')
  }

  return (
    <div><Box sx = {{ flexGrow : 0}} style={{ display: "flex", alignItems: "baseline"}}>
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
        {/* <Paper elevation={10} className="inventory-paper">
        </Paper> */}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="right">Product ID</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
            </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        <br /><br /><br />
        <Button color="success" variant="contained" style={{margin:'20px'}} onClick={handleAdd}>Add</Button>
        <Button color="primary" variant="contained" style={{margin:'20px'}}  onClick={handleUpdate}>Update</Button>
        <Button color="error" variant="contained" style={{margin:'20px'}}  onClick={handleDelete}>Delete</Button>
    </div>
    )
}

export default Inventory;