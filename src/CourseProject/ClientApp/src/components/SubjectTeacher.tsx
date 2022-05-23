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
    const PulpitName = new URLSearchParams(search).get('pulpitName');
    const PulpitId = new URLSearchParams(search).get('pulpitId');
    var toSubject="/Subject?pulpitName="+PulpitName+"&pulpitId="+PulpitId;
    var toTeacher="/Teachers?pulpitName="+PulpitName+"&pulpitId="+PulpitId;


  return (
    <Container component="main" maxWidth="xs">
      <h3>{PulpitName}</h3>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem button component={Link} to={toSubject}>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
              </ListItemButton>
            </ListItem>
            <ListItem button component={Link} to={toTeacher}>
              <ListItemButton>
                <ListItemIcon>
                  <ArrowForwardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
}