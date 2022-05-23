import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { ContentCutOutlined } from '@mui/icons-material';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
  })
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  );

export default function SelectSubject() {
    const classes = useStyles();

    const [university, setUniversity] = React.useState<string>('');

  const [faculty, setFaculty] = React.useState<string>('');

  const [pulpit, setPulpit] = React.useState<string>('');

  const [subject, setSubject] = React.useState<string>('');
  const [subjects, setSubjects] = React.useState<string[]>([]);
  
  const handleChangeSubject = (event: React.ChangeEvent<{value : unknown}>) => {
    setSubject(event.target.value as string);
  };

    async function fetchDataSubject() {
        try {
            console.log({PulpitName:pulpit});
          const res = await api.get("subject/GetSubjectNamesByPulpit?pulpitName="+pulpit);
          console.log(res.data);
          setSubjects(res.data);
        } catch (err) {
          console.log(err);
        }
      }


  useEffect( () => { 
    async function fetchData() {
      try {
        const res = await api.get("account/GetCurrentPulpit");
        console.log(res.data);
        setUniversity(res.data.universityName);
        setFaculty(res.data.facultyName);
        setPulpit(res.data.pulpitName);

        const resSubj = await api.get("subject/GetSubjectNamesByPulpit?pulpitName="+res.data.pulpitName);
          console.log(resSubj.data);
          setSubjects(resSubj.data);
      } catch (err) {
        console.log(err);
      }
    }     
     
    fetchData();
    }, []);

  return (
    <Box sx={{ minWidth: 400 }}>
      <br/>
      <p>University: {university}</p>
      <p>Faculty: {faculty}</p>
      <p>Pulpit: {pulpit}</p>
       <FormControl variant="filled" fullWidth className={classes.formControl}>
        <InputLabel id="select-subject-label">Subject</InputLabel>
        <Select
          style={{color:"#fff"}}
          labelId="select-subject-label"
          id="select-subject"
          name = "select-subject"
          value={subject}
          onChange={handleChangeSubject}
        >
          {subjects.map((subject) => (
            <MenuItem
              key={subject}
              value={subject}
            >
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}