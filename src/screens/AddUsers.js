import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { addUser } from "../store/actions/UserActions";

function AddUsers() {
  const [user, setUser] = useState({
    id: Math.floor(Math.random() * 90000) + 10000,
  });
  const dispatch = useDispatch();

  return (
    <div className="home" style={{ height: "90%" }}>
      <Header title={"Users"} />

      <div
        className="panel-body"
        style={{ background: "white", margin: 15, height: "100%" }}
      >
        <div className="setting-widget">
          <div className="list no-hairlines-md">
            <div className="widget-title">
              <h3 className="text-center">Add User</h3>
            </div>

            <form style={{}}>
              <ul>
                <li className="item-content item-input">
                  <div className="item-col">
                    <div className="item-title item-label">
                      E-mail <span>*</span>
                    </div>
                    <div className="item-input-wrap">
                      <input
                        type="email"
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                      <span className="input-clear-button"></span>
                    </div>
                  </div>
                </li>
                <li className="item-content item-input">
                  <div className="item-col">
                    <div className="item-title item-label">
                      First Name <span>*</span>
                    </div>
                    <div className="item-input-wrap">
                      <input
                        type="text"
                        onChange={(e) =>
                          setUser({ ...user, firstName: e.target.value })
                        }
                      />
                      <span className="input-clear-button"></span>
                    </div>
                  </div>
                </li>
                <li className="item-content item-input">
                  <div className="item-col">
                    <div className="item-title item-label">
                      Last Name <span>*</span>
                    </div>
                    <div className="item-input-wrap">
                      <input
                        type="text"
                        onChange={(e) =>
                          setUser({ ...user, lastName: e.target.value })
                        }
                      />
                      <span className="input-clear-button"></span>
                    </div>
                  </div>
                </li>

                <li className="item-content item-input">
                  <div className="item-col">
                    <div className="item-title item-label">Phone Number</div>
                    <div className="item-input-wrap">
                      <input
                        type="tel"
                        onChange={(e) =>
                          setUser({ ...user, phoneNo: e.target.value })
                        }
                      />
                      <span className="input-clear-button"></span>
                    </div>
                  </div>
                </li>
                <li className="item-content item-input col-50 gender">
                  <div className="item-col">
                    <div className="item-title item-label">Gender</div>
                    <div className="item-input-wrap input-dropdown-wrap">
                      <select
                        onChange={(e) => {
                          console.log("selected", e.target.value);
                          setUser({
                            ...user,
                            gender: e.target.value,
                          });
                        }}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className="item-content item-input col-50 dob">
                  <div className="item-col">
                    <div className="item-title item-label">From</div>
                    <div className="item-input-wrap date-picker-col">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        //data-select="datepicker"
                        onChange={(e) =>
                          setUser({ ...user, fromDate: e.target.value })
                        }
                      />
                      {/* <span className="calendar-icon">
                        <img
                          src="assets/img/icon-metro-calendar-big.svg"
                          alt=""
                        />
                      </span> */}
                    </div>
                  </div>
                </li>
                <li
                  className="bottom-button"
                  style={{
                    position: "relative",
                    bottom: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="btn"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("in add user", user);
                      dispatch(addUser(user));
                    }}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddUsers;
