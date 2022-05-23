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
import { useLocation, useNavigate } from "react-router-dom";



export default function AdminPage() {
    const search = useLocation().search;
    const FacultyName = new URLSearchParams(search).get('facultyName');
    const FacultyId = new URLSearchParams(search).get('facultyId');
    var toPulpit="/Pulpit?facultyName="+FacultyName+"&facultyId="+FacultyId;
    var toProfession="/Profession?facultyName="+FacultyName+"&facultyId="+FacultyId;


  return (
    <Container component="main" maxWidth="xs">
      <h3>{FacultyName}</h3>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem button component={Link} to={toPulpit}>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Pulpits" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to={toProfession}>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Professions" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
}