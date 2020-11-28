import "./scss/style.scss";
//components
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import AddNews from "./components/AddNews/AddNews";
import NewsInfo from "./components/NewsInfo/NewsInfo";
import Category from "./components/Category/Category";
//
//lib
import { Route, Switch } from "react-router-dom";
//
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/about" component={AboutBlock} />
        <Route path="/addnews" component={AddNews} />
        <Route path="/news/:id" component={NewsInfo} />
        <Route path="/category/:name" component={Category} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
