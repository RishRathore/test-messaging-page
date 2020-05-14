import React from 'react'
import { Alert as MessageBlock } from 'reactstrap'

import axiosInstance from '../requestConfig'

let intervalId = null

class MessageBox extends React.Component {
  state = {
    messages: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.fetchMessages()
  }

  componentDidUpdate(prevProps) {
    const { isOnline } = this.props
    if (isOnline !== prevProps.isOnline) {
      if (!isOnline && intervalId !== null) { // sets offline
        clearInterval(intervalId)
        intervalId = null
      } else this.fetchMessages() //back to online state
    }
  }

  fetchMessages = () => {
    intervalId = setInterval(() => {
      axiosInstance().get('api/v1/messages')
        .then(res => {
          if (res.data && res.data.results) {
            this.setState({ messages: res.data.results, isLoading: false })
          }
        })
        .catch(err => {
          console.log('error', err)
          this.setState({ isLoading: false })
        })
    }, 1000)
  }

  componentWillUnmount() {
    if (intervalId !== null) clearInterval(intervalId)
  }

  render() {
    const { messages, isLoading } = this.state
    let sortedMessages = messages.sort((a, b) => (
      new Date(b.posted_at) - new Date(a.posted_at)
    ))

    return (
      <div className='pt-3'>
        <h4>Messages:</h4>
        <hr />
        {isLoading ? <p style={{ textAlign: 'center' }}>fetching...</p> : (
          sortedMessages && sortedMessages.length > 0 ? sortedMessages.map((item, i) => (
            <MessageBlock color="info" key={i} >
              <b>{item.sender}</b>: &nbsp;
              {item.body}
            </MessageBlock>
          )) : 'No message to display'
        )}
      </div>
    )
  }
}

export default MessageBox
