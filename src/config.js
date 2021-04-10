// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

import IssueOptions from "./Components/IssueOptions/IssueOptions";
import LinkList from "./Components/LinkList/LinkList";

const config = {
  botName: "SupportBot",
  initialMessages: [
    createChatBotMessage(
      `Welcome to Nuro Support Bot. How can I help you today?`,
      { widget: "issueOptions" }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#00b695",
    },
    chatButton: {
      backgroundColor: "#00b695",
    },
  },
  widgets: [
    {
      widgetName: "issueOptions",
      widgetFunc: (props) => <IssueOptions {...props} />,
    },
    {
      widgetName: "issueLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Order Issue",
            url: "https://www.kroger.com/hc/help/contact-us",
            id: 1,
          },
          {
            text: "Dropoff Issue",
            url: "https://consumer.nuro.ai/help/change-address",
            id: 2,
          },
          {
            text: "Unloading Issue",
            url: "https://consumer.nuro.ai/contact",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
