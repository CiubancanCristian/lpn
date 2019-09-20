import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/navigation/navigation.component";
import MenuScreen from "./components/menu-screen/menu-screen.component";

import MainSection from "./sections/main/main.section";
import AboutSection from "./sections/about/about.section";
import BrothersSection from "./sections/brothers/brothers.section";
import CareersSection from "./sections/careers/careers.section";
import RushSection from "./sections/rush/rush.section";
import ContactSection from "./sections/contact/contact.section";

import persons from "./assets/brothers.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brothers: [],
      menuClicked: false,
      showInt: false,
      showCur: false,
      showAlt: false,
      showRel: false,
      showExc: false,
      showHis: false,
      showMis: false
    };
  }
  componentDidMount() {
    this.setState({ brothers: persons.Brothers.brothers });
  }

  intHandler = () => {
    this.setState(prevState => {
      return { showInt: !prevState.showInt };
    });
  };
  curHandler = () => {
    this.setState(prevState => {
      return { showCur: !prevState.showCur };
    });
  };
  altHandler = () => {
    this.setState(prevState => {
      return { showAlt: !prevState.showAlt };
    });
  };
  relHandler = () => {
    this.setState(prevState => {
      return { showRel: !prevState.showRel };
    });
  };
  excHandler = () => {
    this.setState(prevState => {
      return { showExc: !prevState.showExc };
    });
  };
  hisHandler = () => {
    this.setState(prevState => {
      return { showHis: !prevState.showHis };
    });
  };
  misHandler = () => {
    this.setState(prevState => {
      return { showMis: !prevState.showMis };
    });
  };
  navMenuHandler = () => {
    this.setState(prevState => {
      return { menuClicked: !prevState.menuClicked };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.menuClicked ? (
          <MenuScreen menuClick={this.navMenuHandler} />
        ) : (
          <div>
            <Navigation menuClick={this.navMenuHandler} />
            <header className="App-header"></header>
            <div className="main-page">
              <MainSection />
              <AboutSection
                int={this.intHandler}
                cur={this.curHandler}
                alt={this.altHandler}
                rel={this.relHandler}
                exc={this.excHandler}
                his={this.hisHandler}
                mis={this.misHandler}
                showInt={this.state.showInt}
                showCur={this.state.showCur}
                showAlt={this.state.showAlt}
                showRel={this.state.showRel}
                showExc={this.state.showExc}
                showHis={this.state.showHis}
                showMis={this.state.showMis}
              />
              <BrothersSection brothers={this.state.brothers} />
              <CareersSection />
              <RushSection />
              <ContactSection />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
