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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuClicked: false
    };
  }

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
              <AboutSection />
              <BrothersSection />
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
