import { ChatEngine } from "react-chat-engine";
import React from "react";
import "./App.css";

import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      userName="alshafi"
      userSecret="158893"
      projectID="1dc62041-b444-41a6-9e5d-8c26cdc5645f"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
