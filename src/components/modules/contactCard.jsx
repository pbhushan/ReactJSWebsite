import React from "react";

const contactCard = props => {
  const getContactChild = (child, title) => {
    if (child && child.length > 0) {
      let count = 0;
      return child.map(item => {
        if (item) {
          const { icon, value, cssStyles } = item;
          const classes = icon && icon.length > 0 ? "col-md-1" : "";
          count += 1;
          return (
            <div key={count} className="col">
              <p className="row">
                <i className={`fa ${cssStyles.classes} ${icon} ${classes}`} />
                <span
                  className={`${cssStyles.classes} col-md`}
                  style={cssStyles.style}
                >
                  {value}
                </span>
              </p>
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getContactChildren = children => {
    if (children && children.length > 0) {
      let count = 0;
      return children.map(item => {
        const { title, cssStyles, child } = item;
        count += 1;
        return (
          <div key={count} className="col">
            <h4 className={cssStyles.classes} style={cssStyles.style}>
              {title}
            </h4>
            {getContactChild(child, title)}
          </div>
        );
      });
    }
  };

  const getContacts = () => {
    const { contacts } = props.contactCard;
    let count = 0;
    if (contacts && contacts.length > 0) {
      return contacts.map(contact => {
        if (contact) {
          const { cssStyles, name, children } = contact;
          count += 1;
          return (
            <div
              key={count}
              className={cssStyles.classes}
              style={cssStyles.style}
            >
              <div className="card-title">
                <h2
                  className={name.cssStyles.classes}
                  style={name.cssStyles.style}
                >
                  {name.title}
                </h2>
              </div>
              <div className="card-body row p-3">
                {getContactChildren(children)}
              </div>
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getContactCard = () => {
    const { contactCard } = props;

    if (contactCard && contactCard.cssStyles) {
      return (
        <div
          className={contactCard.cssStyles.classes}
          style={contactCard.cssStyles.style}
        >
          <div className="card">
            <div className="row">{getContacts()}</div>
          </div>
        </div>
      );
    }
  };

  return <div>{getContactCard()}</div>;
};

export default contactCard;
