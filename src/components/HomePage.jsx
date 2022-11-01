import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '65px',
        // border: '1px solid red',
      }}
    >
      <div>
        <Typography
          variant="body2"
          style={{
            display: 'inline',
            fontSize: '25px',
            fontWeight: '700',
          }}
        >
          От чего тает снег?
          <WhatshotIcon
            style={{
              color: '#FF7400',
            }}
          />
        </Typography>
      </div>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button
          variant="outlined"
          style={{
            width: '40%',
            color: 'black',
            fontWeight: 'bold',
            borderColor: 'black',
          }}
          onClick={() => navigate('/responce')}
        >
          От солнца
        </Button>
        <Button
          style={{
            width: '40%',
            color: 'black',
            fontWeight: 'bold',
            borderColor: 'black',
          }}
          variant="outlined"
          onClick={() => navigate('/responce')}
        >
          От тепла
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
