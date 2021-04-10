import React from "react";
import "./IssueOptions.css";

const IssueOptions = (props) => {
  const options = [
    {
      text: "Order Issue",
      handler: props.actionProvider.handleIssueList,
      id: 1,
    },
    { text: "Dropoff Pin Issue", handler: () => {}, id: 2 },
    { text: "Unloading Issue", handler: () => {}, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="issue-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="issue-options-container">{optionsMarkup}</div>;
};

export default IssueOptions;
