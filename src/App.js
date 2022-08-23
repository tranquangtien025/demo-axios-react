import React, { useEffect, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import axios from 'axios';
import { deleteService, getDetailService, postService, putService } from './utils/axios';

const axiosInstance = axios.create({
  baseURL: "https://62e5f10dde23e2637924f2ba.mockapi.io/api/v1/",
  timeout: 3000
})

const App = () => {

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getData()
    // getOneUser()
  }, [])

  const getData = async () => {
    try {
      const { data } = await axiosInstance.get("/users", { param: { page: 1, pageSize: 10 } })
      console.log({ data })
      setUsersList(data)
    } catch (err) {
      console.log(err.message)
      setUsersList([])
    }
  }

  // const getOneUser = async () => {
  //   try {
  //     const { data } = await getDetailService(2)
  //     console.log({ data })
  //     setUsersList(data)
  //   } catch (err) {
  //     console.log(err.message)
  //     setUsersList([])
  //   }
  // }

  const addUserHandler = (uName, uAge) => {
    postService("/users", { name: uName, age: uAge })
    // setUsersList((prevUserList) => {
    //   return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    // });
  }

  // const updateUserHandler = (uName, uAge, uId) => {
  //   putService(2, { name: uName, age: uAge })
  // }

  // const deleteUserHandler = (uId) => {
  //   deleteService(2)
  // }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
