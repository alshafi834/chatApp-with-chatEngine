import { ChatEngine } from "react-chat-engine";
import React from "react";
import "./App.css";

import ChatFeed from "./components/ChatFeed";
import Auth from "./components/Auth";

const App = () => {
  if (!localStorage.getItem("username")) return <Auth />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      projectID={process.env.REACT_APP_PROJECTID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
