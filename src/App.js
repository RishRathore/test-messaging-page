import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap'

import MessageBox from './components/MessageBox'
import SideBox from './components/SideBox'
import ModalForm from './components/ModalForm'

class App extends React.Component {
  state = {
    isOnline: true,
    openForm: false,
    body: '',
    sender: '',
  }

  toggleStatus = () => {
    this.setState(state => ({ isOnline: !state.isOnline }))
  }

  toggleModal = () => {
    this.setState(state => {
      if (state.openForm) { // close and reset form
        return { openForm: !state.openForm, body: '', sender: '' }
      }
      return { openForm: !state.openForm }
    })
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const {
      isOnline,
      openForm,
      body,
      sender
    } = this.state

    return (
      <div className="container mt-4">
        <div className='row'>
          <div className='col-8 container-box'>
            <MessageBox />
          </div>
          <div className='col-4 ml-2' style={{ maxWidth: '29.333333%' }}>
            <SideBox
              isOnline={isOnline}
              toggleStatus={this.toggleStatus}
              toggleModal={this.toggleModal}
            />
          </div>
          <ModalForm
            open={openForm}
            toggle={this.toggleModal}
            onCancel={this.toggleModal}
            onSubmit={this.toggleModal}
          >
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Sender</Label>
                <Input
                  type="text"
                  name="sender"
                  id="exampleEmail"
                  value={sender}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  type="textarea"
                  name="body"
                  id="exampleText"
                  value={body}
                  onChange={this.handleInput}
                />
              </FormGroup>
            </Form>
          </ModalForm>
        </div>
      </div>
    )
  }
}

export default App
