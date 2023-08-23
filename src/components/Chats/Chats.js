import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/api';
import { Button, List, ListItem, ListItemText, Popover,Avatar } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import './Chat.css'; // Import your CSS for additional styling

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Chats = ({id}) => {
  const [userList, setUserList] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // Used to control the popover
  const [tabActive, setTabActive] = useState(false);

  const toggleTab = (event) => {
    if (tabActive) {
      setTabActive(false);
      setAnchorEl(null); // Close the popover
    } else {
      setTabActive(true);
      setAnchorEl(event.currentTarget); // Open the popover
      getUserList();
    }
  };

  const getUserList = () => {
    // Fetch the user list here
    getUsers()
      .then((res) => {
        if (res.status === 200) {
            console.log(res.data.users)
            const og = res.data.users;
            const data = [...og]
            data.splice(id-1,1)
            console.log(data);
           
          setUserList(data);
        } else {
          // Handle error or show a snackbar message
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error or show a snackbar message
      });
  };

  useEffect(() => {
    // You can fetch initial data or perform other tasks here
    getUserList();
  }, []);

  return (
    <div className="chats-container">
      <Button
        variant="contained"
        color="primary"
        style={{ width: '295px', }}
        onClick={toggleTab}
        startIcon={tabActive ? <ExpandLess /> : <ExpandMore />}
      >
        <ChatBubbleOutlineOutlinedIcon/>Chats
      </Button>
   <Popover
        open={tabActive}
        anchorEl={anchorEl}
        onClose={toggleTab}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      > <Button
        variant="contained"
        color="primary"
        onClick={toggleTab}
        startIcon={tabActive ? <ExpandLess /> : <ExpandMore />}
        fullWidth="auto"
      >
        <ChatBubbleOutlineOutlinedIcon/> Chats
      </Button>
        <div className="user-list">
          
          <List>
            {userList.map((user) => (
              <ListItem key={user.id}>
                   <Avatar src={user.profilepicture} alt={user.name} />
                <ListItemText primary={user.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default Chats;
