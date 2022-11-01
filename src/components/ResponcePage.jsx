import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ListSubheader,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const ResponcePage = () => {
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
      <List>
        <ListItem>
          <Typography
            variant="body2"
            style={{
              fontSize: '25px',
              fontWeight: '700',
            }}
          >
            А я от тебя
          </Typography>
          <ListItemIcon>
            <FavoriteIcon
              style={{
                color: '#A66149',
              }}
              onClick={() => navigate('/')}
            />
          </ListItemIcon>
        </ListItem>
      </List>
      {/* <div
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
        >
          От солнца
        </Button>
      </div> */}
    </div>
  );
};

export default ResponcePage;
