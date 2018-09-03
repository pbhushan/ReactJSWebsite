import React from "react";

const ContactDetails = props => {
  const details = props.details;
  return (
    <div className="container p-4">
      <div className="row p-5">
        {details.map(detail => (
          <div key={detail.departmentName} className="col">
            <h4 className="font-weight-bold indigo-text">
              {detail.departmentName}
            </h4>
            <p>
              {detail.email}
              <br />
              {detail.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
