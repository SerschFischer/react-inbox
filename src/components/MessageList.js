import React, { Component, useState } from "react";
import Message from "./Message";
import {seedData} from "./SeedData"

class MessageList extends Component {
    constructor(props){
        super(props)
        this.state = {messages: seedData}
    }

  render() {
    return (
      <div>
        {this.state.messages.map(message => (
          <Message
            key={message.id}
            read={message.read}
            selected={message.selected}
            starred={message.starred}
            message={message.message}
            labels={message.labels}
            subject={message.subject}
          />
        ))}
      </div>
    );
  }
}

export default MessageList;
