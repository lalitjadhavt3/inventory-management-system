import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
function Users() {
  // const users = [
  //   {
  //     id: 1,
  //     location: "Alabama, USA",
  //     profileImage: "assets/img/patients/patient4.jpg",
  //     name: "Michelle Fairfax",
  //     age: 25,
  //     gender: "Female",
  //     phoneNo: "+1 504 368 6874",
  //   },
  //   {
  //     id: 2,
  //     location: "California, USA",
  //     profileImage: "assets/img/patients/patient7.jpg",
  //     name: "Joan Gardner",
  //     age: 26,
  //     gender: "Male",
  //     phoneNo: "+1 504 368 6874",
  //   },
  //   {
  //     id: 3,
  //     location: "Alabama, USA",
  //     profileImage: "assets/img/patients/patient10.jpg",
  //     name: "Robert Rhodes",
  //     age: 25,
  //     gender: "Male",
  //     phoneNo: "+1 504 368 6874",
  //   },
  // ];

  const users = useSelector((state) => console.log("state", state));
  console.log("USers", users);

  return (
    <div className="home">
      <Header title={"Users"} />
      <div className="page-content pt-0">
        <div className="container">
          <div className="patients-list">
            <div className="container">
              {users?.map((i) => {
                return <UserCard user={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
