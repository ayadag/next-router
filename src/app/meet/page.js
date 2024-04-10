import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MeetProvider } from ".../context/MeetContext";
import Meeting from "./[key]/page";
// import StartupPage from ".../pages/StartupPage";
// import ThankYou from ".../pages/ThankYouPage";

// import ".../styles/custom.css";

const Meet = () => {
  return (
    <MeetProvider>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={StartupPage} exact /> */}
          <Route path="/:key" component={Meeting} exact />
          {/* <Route path="/thank-you" component={ThankYou} /> */}
        </Switch>
      </BrowserRouter>
    </MeetProvider>
  );
};

export default Meet;
