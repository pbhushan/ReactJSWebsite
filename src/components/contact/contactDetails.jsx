import React from "react";

const ContactDetails = props => {
  const { details } = props;

  const getContactDetiails = () => {
    if (details && details.length > 0) {
      return details.map(detail => {
        return (
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
        );
      });
    }
  };

  return (
    <div className="container p-4">
      <div className="row p-5">{getContactDetiails()}</div>
    </div>
  );
};

export default ContactDetails;
