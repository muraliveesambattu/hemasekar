import React, { Component } from "react";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: "",
        name: "",
        email: "",
        age: "",
        role: "",
      },
      editIndex: "",
      users: [
        {
          id: 6,
          name: "Frank Thomas",
          email: "frank.thomas@example.com",
          age: 32,
          role: "DevOps",
        },
        {
          id: 7,
          name: "Grace Lee",
          email: "grace.lee@example.com",
          age: 29,
          role: "Business Analyst",
        },
        {
          id: 8,
          name: "Henry Adams",
          email: "henry.adams@example.com",
          age: 27,
          role: "Developer",
        },
        {
          id: 9,
          name: "Ivy Martinez",
          email: "ivy.martinez@example.com",
          age: 31,
          role: "Scrum Master",
        },
        {
          id: 10,
          name: "Jack Wilson",
          email: "jack.wilson@example.com",
          age: 24,
          role: "Intern",
        },
      ],
    };
  }
  handleChange = (e) => {
    console.log(e);
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: "" });
    this.handleReset()
  };
  handleDelete = (usr) => {
    console.log(usr);
    const newUsers = this.state.users.filter((user) => {
      return user.id !== usr.id;
    });
    this.setState({ users: newUsers });
  };
  handleEdit = (user, i) => {
    this.setState({ user: user, editIndex: i });
  };
  handleReset = () => {
    this.setState({
      user: {
        id: "",
        name: "",
        email: "",
        age: "",
      },
    });
  };
  handleSubmit = () => {
    console.log(this.state.user);
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleReset();
  };

  render() {
    return (
      <div>
        <form>
          <h2>User Form</h2>
          <label htmlFor="id">ID</label>
          <input
            id="id"
            name="id"
            value={this.state.user.id}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.user.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={this.state.user.age}
            onChange={this.handleChange}
          />
          <br />

          <br />
          {this.state.editIndex == "" ? (
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={this.handleUpdate}>
              Update
            </button>
          )}
        </form>

        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(user, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(user);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
