import React, {useContext, useState, useEffect, useCallback} from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";
import {ContactContext} from "../App";


const Contacts = () => {

  // NOTE: 'teach' the button to add new contact info
  // NOTE: and render an array of ContactItem components
    const [contactData, setContactData] = useState([{id: Math.random(), chosenChannel:''}]);

    let context = useContext(ContactContext);

    useEffect(()=>{
        context.changeLastChannelText(contactData[contactData.length - 1].chosenChannel);
        context.changeChannelQty(contactData.length);
    })

    let addContact = () => {
        setContactData((prev) =>
            [...prev, {id: Math.random(), chosenChannel:''}]
        );
    };


    let removeContact = (id) => {
        setContactData(contactData.filter((el) => {
            return el.id !==id
        }));
    };

    let changeChosenChannel = useCallback((id, text) => {
        setContactData((prevState) => prevState.map((el,index) => {
            if (el.id === id) {
                return {...el, 'chosenChannel': text}
            } else {
                return {...el}
            }
        }))
    }, []);

  return (
    <>
      <div className={stylesCenter.channels}>
          {
              contactData.map(({id}, index) => (
                      <ContactItem
                          index={index}
                          key = {id}
                          id = {id}
                          removeContact = {removeContact}
                          changeChosenChannel = {changeChosenChannel}
                      />
                  )
              )
          }

      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid="add-button" onClick={addContact}
        >
          <img src="plus.svg" alt="plus logo" />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;