import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';


export const options = {
  title: "Info",
  backgroundColor: '#222222',
  titleTextStyle: { color: '#FFF' },
  legendTextStyle: { color: '#FFF' },
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API + 'statistic/'
})

function Home() {

  const [data, setData] = useState(); 

  var result = [];

  useEffect(() => {
    result.push(["University","Count of students"]);
    api.get("StatisticUniversity")
      .then(res => res.data)
      .then(res => {
        res.forEach(element => {
          result.push([element.item1, +element.item2]);
        });
        console.log(result);
        setData(result);
      }
      )
      .catch(error => {
        console.log("Error")
      })
  }, [])

  return (
      <div>
        <Chart
          chartType="ColumnChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
  );
}

export default Home;
