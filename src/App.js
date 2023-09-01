import React from "react";
import {useState} from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();

function App() {
    const [lastChannelText, changeLastChannelText] = useState('');
    const [channelQty, changeChannelQty] = useState(1);
    let value = {lastChannelText, changeLastChannelText, channelQty, changeChannelQty};

// NOTE: Use context provider in this component

  return (
      <ContactContext.Provider value={value}>
          <div className="grid-container">
              <div>
                  <Contacts/>
              </div>
              <div>
                  <Logo />
              </div>
          </div>
      </ContactContext.Provider>
  );
}

export default App;
