import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import Pulpit from "./components/Pulpit";
import Profession from "./components/Profession";
import Group from "./components/Group";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import AddRoleToUser from "./components/AddRoleToUser";
import AddGroupToStudent from "./components/AddGroupToStudent";
import AddPulpitToTeacher from "./components/AddPulpitToTeacher";
import GenerateQR from "./components/GenerateQR";
import AuditoriumType from "./components/AuditoriumType";
import Auditorium from "./components/Auditorium";
import Subject from "./components/Subject";
import Attendance from "./components/Attendance";
import ButtonAttendance from "./components/ButtonAttendance";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import EditCurrentUser from "./components/EditCurrentUser";
import University from "./components/University";
import AdminPage from "./components/AdminPage";

import "./custom.css";

export default () => (
  <Layout>
    <Routes>
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/University"} element={<University />} />
      <Route path={"/Faculty"} element={<Faculty />} />
      <Route path={"/Pulpit"} element={<Pulpit />} />
      <Route path={"/Profession"} element={<Profession />} />
      <Route path={"/Group"} element={<Group />} />
      <Route path={"/"} element={<SignIn />} />
      <Route path={"/SignUp"} element={<SignUp />} />
      <Route path={"/SignOut"} element={<SignOut />} />
      <Route path={"/AddRoleToUser"} element={<AddRoleToUser />} />
      <Route path={"/AddGroupToStudent"} element={<AddGroupToStudent />} />
      <Route path={"/AddPulpitToTeacher"} element={<AddPulpitToTeacher />} />
      <Route path={"/GenerateQR"} element={<GenerateQR />} />
      <Route path={"/AuditoriumType"} element={<AuditoriumType />} />
      <Route path={"/Auditorium"} element={<Auditorium />} />
      <Route path={"/Subject"} element={<Subject />} />
      <Route path={"/Attendance"} element={<Attendance />} />
      <Route path={"/ButtonAttendance"} element={<ButtonAttendance />} />
      <Route path={"/Students"} element={<Students />} />
      <Route path={"/Teachers"} element={<Teachers />} />
      <Route path={"/EditCurrentUser"} element={<EditCurrentUser />} />
      <Route path={"/AdminPage"} element={<AdminPage />} />
    </Routes>
  </Layout>
);
