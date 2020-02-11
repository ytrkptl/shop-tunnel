import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { fetchContactFormStart } from "../../redux/contact/contact.actions";


import {
  ContactContainer,
  ContactTitle,
  ContactButtonsContainer
} from './contact.styles';

const Contact = ({ isFetching, hasErrored, fetchedData, errorMessage, fetchContactFormStart }) => {
  const [userInput, setUserInput] = useState({ customerName: '', email: '', message: '' })

  const { customerName, email, message } = userInput;
  const handleSubmit = async event => {
    event.preventDefault();
    fetchContactFormStart(userInput);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Form</ContactTitle>
      <span>Fill out the form below in order to send us a message.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='customerName'
          type='name'
          value={customerName}
          handleChange={handleChange}
          label='Name'
          required
        />
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='message'
          type='text'
          value={message}
          handleChange={handleChange}
          label='Message'
          required
          textareaInstead={true}
        />
        <ContactButtonsContainer>
          <CustomButton type='submit'> Submit </CustomButton>
        </ContactButtonsContainer>
      </form>
    </ContactContainer>
  );
}

const mapStateToProps = state => ({
  isFetching: state.contactFormReducer.isFetching,
  fetchedData: state.contactFormReducer.data,
  hasErrored: state.contactFormReducer.hasErrored,
  errorMessage: state.contactFormReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
  fetchContactFormStart: text => dispatch(fetchContactFormStart(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);