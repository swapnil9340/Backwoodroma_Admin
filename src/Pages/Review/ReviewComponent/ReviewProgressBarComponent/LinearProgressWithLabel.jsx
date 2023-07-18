import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const LinearProgressWithLabel=(props)=>{
    return(
       <React.Fragment>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress 
        sx={{
          ".css-5xe99f-MuiLinearProgress-bar1":{
            backgroundColor:"#31B665"
          }
        }}
        variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="#31B665">
          {`${props.value}k`}
        </Typography>
      </Box>
    </Box>

       </React.Fragment>
    )
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };
export default LinearProgressWithLabel