import React from 'react'
import { Alert as MessageBlock } from 'reactstrap'

import { messages } from '../utils/staticData'

class MessageBox extends React.Component {
  render() {
    return (
      <div className='pt-3'>
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
