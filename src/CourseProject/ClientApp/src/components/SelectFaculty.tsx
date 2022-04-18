import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API+'profession/'
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

export default function SelectFaculty() {
    const classes = useStyles();

  const [university, setUniversity] = React.useState<string>('');
  const [universities, setUniversities] = React.useState<string[]>([]);

  const [faculty, setFaculty] = React.useState<string>('');
  const [faculties, setFaculties] = React.useState<string[]>([]);

  const [profession, setProfession] = React.useState<string>('');
  const [professions, setProfessions] = React.useState<string[]>([]);

  const handleChangeUniversity = (event: React.ChangeEvent<{value : unknown}>) => {
    setUniversity(event.target.value as string);
    fetchDataFaculty(event.target.value as string);
  };

  const handleChangeFaculty = (event: React.ChangeEvent<{value : unknown}>) => {
    setFaculty(event.target.value as string);
    fetchDataProfession(event.target.value as string);
  };

  const handleChangProfession = (event: React.ChangeEvent<{value : unknown}>) => {
    setProfession(event.target.value as string);
  };

  async function fetchDataFaculty(university1:string) {
    try {
      console.log({UniversityName:university1});
      const res = await api.get("GetFacultyNamesByUniversity?universityName="+university1);
      console.log(res.data);
      setFaculties(res.data);
    } catch (err) {
      console.log(err);
    }
  } 

  async function fetchDataProfession(faculty1:string) {
      try {
          console.log({FacultyName:faculty1});
        const res = await api.get("GetProfessionNamesByFaculty?facultyName="+faculty1);
        console.log(res.data);
        setProfessions(res.data);
      } catch (err) {
        console.log(err);
      }
    }


  useEffect( () => { 
    async function fetchDataUniversity(){
      try{
        const res = await api.get("GetUniversityNames");

        setUniversities(res.data);
      }catch(err){
        console.log(err);
      }
    }

    fetchDataUniversity();
    }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="filled" fullWidth className={classes.formControl}>
        <InputLabel id="select-university-label">University</InputLabel>
        <Select
          style={{color:"#fff"}}
          labelId="select-university-label"
          id="select-university"
          value={university}
          onChange={handleChangeUniversity}
        >
          {universities.map((university) => (
            <MenuItem
              key={university}
              value={university}
            >
              {university}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
        <FormControl variant="filled" fullWidth className={classes.formControl}>
        <InputLabel id="select-faculty-label">Faculty</InputLabel>
        <Select
          style={{color:"#fff"}}
          labelId="select-faculty-label"
          id="select-faculty"
          value={faculty}
          onChange={handleChangeFaculty}
        >
          {faculties.map((faculty) => (
            <MenuItem
              key={faculty}
              value={faculty}
            >
              {faculty}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
       <FormControl variant="filled" fullWidth className={classes.formControl}>
        <InputLabel id="select-profession-label">Profession</InputLabel>
        <Select
          style={{color:"#fff"}}
          labelId="select-profession-label"
          id="select-profession"
          name = "select-profession"
          value={profession}
          onChange={handleChangProfession}
        >
          {professions.map((profession) => (
            <MenuItem
              key={profession}
              value={profession}
            >
              {profession}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}