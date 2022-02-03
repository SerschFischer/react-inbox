// API reference for the React component class definition:
// https://reactjs.org/docs/react-component.html

import React from "react";

class Message extends React.Component {
  // When you render a React Component, you can pass it data via props.
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      subject: props.subject,
      body: props.body,
      read: props.read,
      starred: props.starred || false,
      selected: props.selected,
      labels: props.labels,
    };
  }

  _handleLabels = () => {
    if (this.state.labels !== undefined) {
      return this.state.labels.map((label) => (
        <span class="label label-warning">{label}</span>
      ));
    }
  };

  _handleMessageBody = () => {
    if (this.state.body !== undefined)  {
      return (
        <div class="row message-body">
          <div class="col-xs-11 col-xs-offset-1">
            {this.state.body}
          </div>
        </div>
      );
    }
  };

  _toggleCheckbox = () => {
        this.setState({selected: !this.state.selected})
  }

  _toggleStarring = () => {
      this.setState({starred: !this.state.starred})
  }

  render() {
    return (
      <div
        className={[
          "row",
          "message",
          this.state.read ? "read" : "unread" ,
          this.state.selected && "selected",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
               <input type="checkbox" defaultChecked={this.state.selected} onChange={this._toggleCheckbox}/>
            </div>
            <div className="col-xs-2">
              <i
                className={[
                  "star",
                  "fa",
                  !this.state.starred && "fa-star",
                  this.state.starred && "fa-star-o",
                ]
                  .filter(Boolean)
                  .join(" ")}
                  onClick={this._toggleStarring}
              ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this._handleLabels()}
          <a href="#">{this.state.subject}</a>
        </div>
        {this._handleMessageBody}
      </div>
    );
  }
}

export default Message;
