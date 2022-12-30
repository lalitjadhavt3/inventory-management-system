import React from "react";

function UserCard({ user }) {
  return (
    <div className="patient-widget">
      <div className="patient-top-details">
        <div>
          <span>{`User ID - ${user.id}`}</span>
        </div>
        <div>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            {` ${user.location}`}
          </span>
        </div>
      </div>
      <div className="pat-info-left">
        <div className="patient-img">
          <a href="patient-profile.html">
            <img
              src={user.profileImage}
              className="img-fluid"
              alt="User Image"
            />
          </a>
        </div>
        <div className="pat-info-cont">
          <h4 className="pat-name">
            <a href="patient-profile.html">{`${user.firstName} ${user.lastName}`}</a>
          </h4>
          <div className="patient-details-col">
            <span>{`${user.age} Years, ${user.gender}`}</span>
          </div>
          <div className="pat-contact">
            <span className="icon-phone">
              <i className="fas fa-phone"></i>
            </span>
            <span>{`${user.phoneNo}`}</span>
          </div>
        </div>
      </div>
      <div className="status-col">
        <div className="status-btn">
          <a href="#" className="btn view-eye">
            <i>
              <img src="assets/img/icon-awesome-eye.svg" alt="" />
            </i>
            View
          </a>
        </div>
        <div className="status-btn">
          <a href="#" className="btn success">
            <i>
              <img src="assets/img/icon-checkmark.svg" alt="" />
            </i>
            Confirm
          </a>
        </div>
        <div className="status-btn">
          <a href="#" className="btn print">
            <i>
              <img src="assets/img/icon-metro-printer.svg" alt="" />
            </i>
            Print
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
