import React from 'react'
import { Alert as MessageBlock } from 'reactstrap'

import { messages as dummyMessages } from '../utils/staticData'

class MessageBox extends React.Component {
  state = {
    messages: dummyMessages
  }

  render() {
    const { messages } = this.state
    return (
      <div className='pt-3'>
        <h4>Messages:</h4>
        <hr />
        {messages && messages.map((item, i) => (
          <MessageBlock color="info" key={i} >
            <b>{item.sender}</b>: &nbsp;
            {item.body}
          </MessageBlock>
        ))}
      </div>
    )
  }
}

export default MessageBox
