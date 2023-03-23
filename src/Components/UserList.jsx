import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import UserService from "../Services/UserService";
import axios from "axios";

const UserList = () => {
  const [state, setState] = useState({ users: [] });

  const getDataFn = async (url) => {
    const response = await UserService.get(url);
    setState({
      users: response.data,
    });
    // const response = await
    // setState({
    //   users: response.data,
    // });
  };

  useEffect(() => {
    // UserSerivce.getAllUsers()
    //   .then((response) => {
    //     setState({
    //       users: response.data,
    //     });
    //   })
    //   .catch((response) => {
    //     console.log(response);
    //   });
    //const response = await axios.get('/users');
    const response = getDataFn("/users");

    console.log(response);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table
              className="mt-3 shadow-lg text-center"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Addresss</th>
                </tr>
              </thead>
              <tbody>
                {state.users.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.address.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
