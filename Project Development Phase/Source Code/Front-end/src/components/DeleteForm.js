import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField } from "@mui/material";

function DeleteForm() {
    // const colorStyle = {backgroundColor : "rgb(27, 208, 162)"}
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('../inventory')
    }
    return (
        <div>
            <Paper elevation={10} className="deleteform-paper">
                <Grid align="center">
                    <h3 className="form-title">Delete Product</h3>
                    <TextField label="Product Name" size="small" required></TextField>
                    <br /><br />
                    <TextField label="Product Id" size="small" required></TextField>
                    <br /><br />
                    <Button color="error" variant="contained"
                        onClick={handleClick}>
                        Delete
                    </Button>          
                </Grid>
           </Paper>
        </div>
    );
}

export default DeleteForm;