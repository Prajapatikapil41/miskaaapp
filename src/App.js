import React, { useEffect, useState } from "react";
import Card from "./MyComponent/Card";

const App = () => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [propData, setPropData] = useState({});

  const getNewCountry = () => {
    let num = Math.floor(Math.random() * (49 - 0 + 1)) + 0;
    setArrayIndex(num);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://restcountries.eu/rest/v2/region/asia");
        const data = await res.json();
        const objData = {
          name: data[arrayIndex].name,
          capital: data[arrayIndex].capital,
          region: data[arrayIndex].region,
          subregion: data[arrayIndex].subregion,
          population: data[arrayIndex].population,
          borders: data[arrayIndex].borders + ", ",
          languages: data[arrayIndex].languages.map(
            (array) => array.name + ", "
          ),
          flag: data[arrayIndex].flag,
        };
        setPropData(objData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [arrayIndex]);

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <Card cardData={propData} onSelect={getNewCountry} />
        </div>
      </div>
    </>
  );
};

export default App;
