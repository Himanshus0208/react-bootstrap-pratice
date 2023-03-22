import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import UserSerivce from "../Services/UserService";

const UserList = () => {
  const [state, setState] = useState({ users: [] });

  useEffect(() => {
    UserSerivce.getAllUsers()
      .then((response) => {
        setState({
          users: response.data,
        });
      })
      .catch((response) => {
        console.log(response);
      });
      console.log(state.users);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table className="mt-3 shadow-lg text-center" striped bordered hover>
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
                {state.users.map((item)=>{
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                    </tr>
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
