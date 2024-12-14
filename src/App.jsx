import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import Form from "./components/Form";
import JSXRules from "./components/JSXRules";
import Expression from "./components/Expression";
import Greeting2 from "./components/Greeting2";
import ProductInfo from "./components/ProductInfo";
import List from "./components/List";
const App = () => {
  return (
    <section>
      Hello,this first greeting is from App.jsx,and second greetings is from
      greet file.
      {/* this <Greet/> is a self closing tag , it can also be written as <Greet></Greet> */}
      */
      <Greet />
      <WelcomeMessage />
      <Greeting2 />
      <Header />
      <MainContent />
      <Form />
      <ProductInfo />
      <List />
      <JSXRules />
      <Expression />
      <Footer />
    </section>
  );
};
export default App;
//funtion App (){
// return
//};
//export default App
//this function can also be declared as this function App (), method.
