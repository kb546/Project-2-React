import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { tab } from '@testing-library/user-event/dist/tab';

// https://www.freecodecamp.org/news/how-to-integrate-material-ui-data-grid-in-react-using-data-from-a-rest-api/

function DataGridForCoop(){

  const columns = [
    { field: 'id', headerName: 'ID',headerClassName: 'super-app-theme--header'
    , width: 150 },
    {
      field: 'employer',
      headerName: 'Employer',
      headerClassName: 'super-app-theme--header',
      width: 400,
    },
    {
      field: 'degree',
      headerName: 'Degree',
      headerClassName: 'super-app-theme--header',
      width: 300,
    },
    {
      field: 'city',
      headerName: 'City',
      headerClassName: 'super-app-theme--header',
      width: 300,
    },
    {
      field: 'term',
      headerName: 'Term',
      headerClassName: 'super-app-theme--header',
      width: 200,
    },
  ];

  const headerStyles ={
    backgroundColor: '#718e82',
    color: '#cc6600',
    fontWeight:'bold',
  };

  // The tableData above serves as a getter, while the setTableData serves as a setter.
  const [tableData, setTableData] = useState([]);

  // First, inside the useEffect hook, we use Fetch to consume the JSON placeholder REST API
  // Then we convert the response we got into JSON format
  // Lastly, we pass the data from our response to the setter we created earlier called setTableData
  
  useEffect(() => {
    fetch("http://solace.ist.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/employment/coopTable/coopInformation")
     .then(response => response.json())
     .then((data) => {
        const formattedRows = data.coopInformation.map((info, index) => ({
          id: index+1,
          employer: info.employer,
          degree: info.degree,
          city: info.city,
          term: info.term,
        }));
        setTableData(formattedRows);
  })
  }, []);
  
  console.log(typeof tableData);
  
console.log("rows", tableData);
  return (
    <div>

      <DataGrid sx={{
        height:700,
        width:'100%',
        margin:'10px 10px',
        fontSize:'1.1rem',
        '& .super-app-theme--header': {
          color: '#cc6600',
          fontSize:'1.3rem',
        },
        boxShadow:2,
        border: 2,
        borderColor: '#cc6600',
        '& .MuiDataGrid-cell:hover': {
        color: 'primary.main',
        },
      }}
        rows={tableData}
        columns={columns}
        pageSize={12}
        headerClassName="custom-header-class"
        headerStyles={headerStyles}
        />
    </div>
  );
} 
  

export default DataGridForCoop;