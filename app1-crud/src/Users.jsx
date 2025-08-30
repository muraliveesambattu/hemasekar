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
      users: tempUsers,
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
    this.handleReset();
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

  handleSearchUser = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      const newUsers = this.state.users.filter((usr) => {
        return usr.name.indexOf(e.target.value) > -1;
      });
      this.setState({ users: newUsers });
    } else {
      this.setState({ users: tempUsers });
    }
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
        <hr />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search User ..."
          onChange={this.handleSearchUser}
        />{" "}
        <br /> <br />
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
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    );
  }
}

const tempUsers = [
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
  {
    id: 11,
    name: "Karen Brown",
    email: "karen.brown@example.com",
    age: 35,
    role: "Project Manager",
  },
  {
    id: 12,
    name: "Leo Carter",
    email: "leo.carter@example.com",
    age: 28,
    role: "Developer",
  },
  {
    id: 13,
    name: "Mia Scott",
    email: "mia.scott@example.com",
    age: 26,
    role: "UI/UX Designer",
  },
  {
    id: 14,
    name: "Nathan Perez",
    email: "nathan.perez@example.com",
    age: 33,
    role: "QA Engineer",
  },
  {
    id: 15,
    name: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    age: 30,
    role: "Data Scientist",
  },
  {
    id: 16,
    name: "Paul Walker",
    email: "paul.walker@example.com",
    age: 27,
    role: "Developer",
  },
  {
    id: 17,
    name: "Quinn Harris",
    email: "quinn.harris@example.com",
    age: 29,
    role: "Business Analyst",
  },
  {
    id: 18,
    name: "Rachel Lewis",
    email: "rachel.lewis@example.com",
    age: 34,
    role: "HR Manager",
  },
  {
    id: 19,
    name: "Samuel Young",
    email: "samuel.young@example.com",
    age: 28,
    role: "DevOps",
  },
  {
    id: 20,
    name: "Tina King",
    email: "tina.king@example.com",
    age: 25,
    role: "Developer",
  },
  {
    id: 21,
    name: "Uma Davis",
    email: "uma.davis@example.com",
    age: 31,
    role: "Scrum Master",
  },
  {
    id: 22,
    name: "Victor Clark",
    email: "victor.clark@example.com",
    age: 36,
    role: "Tech Lead",
  },
  {
    id: 23,
    name: "Wendy Hall",
    email: "wendy.hall@example.com",
    age: 29,
    role: "QA Engineer",
  },
  {
    id: 24,
    name: "Xavier Allen",
    email: "xavier.allen@example.com",
    age: 32,
    role: "Developer",
  },
  {
    id: 25,
    name: "Yara Gonzalez",
    email: "yara.gonzalez@example.com",
    age: 27,
    role: "Data Analyst",
  },
  {
    id: 26,
    name: "Zachary Baker",
    email: "zachary.baker@example.com",
    age: 30,
    role: "DevOps",
  },
  {
    id: 27,
    name: "Amelia Moore",
    email: "amelia.moore@example.com",
    age: 28,
    role: "Frontend Developer",
  },
  {
    id: 28,
    name: "Brian Reed",
    email: "brian.reed@example.com",
    age: 35,
    role: "Backend Developer",
  },
  {
    id: 29,
    name: "Chloe Turner",
    email: "chloe.turner@example.com",
    age: 26,
    role: "Intern",
  },
  {
    id: 30,
    name: "Daniel Evans",
    email: "daniel.evans@example.com",
    age: 33,
    role: "Fullstack Developer",
  },
];

