import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



export default function AdminPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem button component={Link} to="/Teachers">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers List" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Students">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Students List" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Attendance">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Attendance" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/University">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="University" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Faculty">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Faculty" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Pulpit">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Pulpit" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Profession">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Profession" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Group">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Group" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Subject">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Subject" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/Auditorium">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Auditorium" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to="/AuditoriumType">
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Auditorium Type" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
}