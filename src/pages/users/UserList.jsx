import React from 'react'
import { useState } from 'react'
import { userRows } from '../../data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./UserList.css"

export default function UserList() {

  const [userData, setUserData] = useState(userRows)


  const deleteUser = (userId) => {
    setUserData(prevData => {
      return prevData.filter(user => user.id != userId);
    })
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'User name',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className='link'>
            <div className='userListUser'>
              <img src={params.row.avatar} className='userListImg' />
              {params.row.username}
            </div>
          </Link>
        )

      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='userListAction'>
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => deleteUser(params.row.id)} />
          </div>
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid width="100%" 
        rows={userData}
        columns={columns}
        disableSelectionOnClick
        autoPageSize
        checkboxSelection
      />
    </div>
  );
}










// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import './UserList.css';

// export default function UserList() {
//   const [userData, setUserData] = useState([]);  // آرایه خالی برای داده‌ها
//   const [loading, setLoading] = useState(true);  // وضعیت بارگذاری

//   useEffect(() => {
//     // بارگذاری داده‌ها از فایل JSON
//     fetch('/users.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setUserData(data);  // ذخیره داده‌ها در state
//         setLoading(false);  // تغییر وضعیت بارگذاری
//       })
//       .catch((error) => {
//         console.error('Error loading user data:', error);
//         setLoading(false);  // حتی در صورت بروز خطا، وضعیت بارگذاری به false تغییر کند
//       });
//   }, []);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//       field: 'user',
//       headerName: 'User name',
//       width: 200,
//       renderCell: (params) => (
//         <Link to={`/user/${params.row.id}`} className="link">
//           <div className="userListUser">
//             <img src={params.row.avatar} className="userListImg" alt="avatar" />
//             {params.row.username}
//           </div>
//         </Link>
//       ),
//     },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'status', headerName: 'Status', width: 150 },
//     { field: 'transaction', headerName: 'Transaction', width: 150 },
//     {
//       field: 'action',
//       headerName: 'Action',
//       width: 150,
//       renderCell: (params) => (
//         <div className="userListAction">
//           <Link to={`/user/${params.row.id}`} className="link">
//             <button className="userListEdit">Edit</button>
//           </Link>
//           <DeleteOutlineIcon className="userListDelete" />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="userList">
//       {loading ? (
//         <div>در حال بارگذاری...</div>  // زمانی که داده‌ها هنوز بارگذاری نشده‌اند
//       ) : (
//         <DataGrid
//           rows={userData}
//           columns={columns}
//           pageSize={5}
//           pagination
//           disableSelectionOnClick
//         />
//       )}
//     </div>
//   );
// }
