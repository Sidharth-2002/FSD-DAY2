import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const[page,setPage]=useState('Movie')
    const[count,setcount]=useState(0)
    function valueAdd() {
        setcount(count+1)
    }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>Welcome to {page} Page</h1>
    <div>
      <TextField
        
        id="outlined-required"
        label="Name"
       
      />
    </div>
    <div>
      <TextField
        
        id="outlined-disabled"
        label="Email"
        type="email"
       
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="Address"
       
      />
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd}>Register</Button>
        <br></br>
        <small>Button is clicked {count} times.</small>
      </div>
      </Box>
  )
}

export default Add