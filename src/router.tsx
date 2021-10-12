import { BrowserRouter, Route } from "react-router-dom";

import { FormStep1 } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { FormStep3 } from "./pages/FormStep3";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormStep1} />
      <Route path="/FormStep2" component={FormStep2} />
      <Route path="/FormStep3" component={FormStep3} />
    </BrowserRouter>
  );
};
