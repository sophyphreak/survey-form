import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

// todo: switch to formik because duh

const TheForm = () => (
  <Form style={{ margin: '10%', fontFamily: 'sans-serif' }} id="survey-form">
        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Name</Label>
          <Input type="name" name="name" id="name"/>
        </FormGroup> 
        <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
          <Label>Email</Label>
          <Input type="email" name="email" id="email"/>
        </FormGroup>
        <FormGroup style={{ display: 'flex', flexDirection: 'column'}}>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup style={{ display: 'flex', flexDirection: 'column'}}>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup style={{ display: 'flex', flexDirection: 'column'}}>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup style={{ display: 'flex', flexDirection: 'column'}}>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup style={{ display: 'flex', flexDirection: 'column'}}>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset" style={{ display: 'flex', flexDirection: 'column'}}>
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check style={{ display: 'flex', flexDirection: 'column'}}>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled style={{ display: 'flex', flexDirection: 'column'}}>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );

export default TheForm
