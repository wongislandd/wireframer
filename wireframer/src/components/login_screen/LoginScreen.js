import React, { Component } from 'react'
import {TextInput, Button} from 'react-materialize'
export default class LoginScreen extends Component {
    render() {
        return (
            <div>
                <TextInput
                    icon="email"
                    label="Email"
                />
                <TextInput
                    icon="lock"
                    label="Password"
                />
                  <Button
                    node="button"
                    style={{
                    marginRight: '5px'
                    }}
                    waves="light"
                >
                    Login
                </Button>
            </div>
        )
    }
}
