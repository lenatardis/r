import React from 'react'
import {ContactContext} from "./App";
import {useState, useContext} from "react";

function ChannelStatistics() {

  // NOTE: use Context to get info about entered contacts

    let context = useContext(ContactContext);
    if (context.lastChannelText ==='None') {context.lastChannelText = false}

  return (
      <p data-testid="statistics">
          {`Count of channels: ${parseFloat(context.channelQty)}`}<br/>
          {context.lastChannelText && (`your last channel is: ${context.lastChannelText}`)}
      </p>
  )
}

export default ChannelStatistics