import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./components/signin";
import { Signup } from "./components/signup";
import { Weebgram } from "./components/main";
import { NotFound } from "./components/notfound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Weebgram />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
