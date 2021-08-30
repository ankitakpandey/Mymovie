import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;