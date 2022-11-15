import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField } from "@mui/material";

function UpdateForm() {
    // const colorStyle = {backgroundColor : "rgb(27, 208, 162)"}
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('../inventory')
    }
    return (
        <div>
            <Paper elevation={10} className="updateform-paper">
                <Grid align="center">
                    <h3 className="form-title">Update Product</h3>
                    <TextField label="Product Name" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Product Id" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Price" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Quantity" size="small" required></TextField>
                    <br /><br />
                    <Button color="primary" variant="contained"
                        onClick={handleClick}>
                        Update
                    </Button>          
                </Grid>
           </Paper>
        </div>
    );
}

export default UpdateForm;