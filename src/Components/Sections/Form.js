import React, { Component } from 'react';
import axios from '../../axios-connection';

class Form extends Component {

  state = {
    form: {
      email: '',
      name: '',
      subject: '',
      message: '',
      valid: ''
    }
  }

  onChangeValue = ( event, property ) => {
    let form = this.state.form;
    form[property] = event.target.value;
    this.setState({form})
  }

  sendMail = ( event ) => {
    event.preventDefault();
    let form = { ...this.state.form };
    let data = {
      email: form.email,
      name: form.name,
      subject: form.subject,
      message: form.message
    }
    axios.post('/mail/sendMessage', data)
    .then( () => {
      form.message = '';
      form.name = '';
      form.subject = '';
      form.email = '';
      this.setState({form})
    })
  }

  render() {

    let classes = ['contact-us'];
    if (this.props.classes)
      classes.push(this.props.classes)

    return (
      <section className={classes.join(' ')}>
        <div className='contact-us__img'>
          <form className='contact-us__img--form' onSubmit={ e => this.sendMail(e)}>
            <h2 className='form-title'>
              Contact us
            </h2>
            <div className='form-group'>
              <input type='text' className='input' placeholder='Name' id='name' required value={this.state.form.name} onChange={ e => this.onChangeValue( e, 'name' )}/>
              <label className='label' htmlFor='name'>Name</label>
            </div>
            <div className='form-group'>
              <input type='email' className='input' placeholder='e-mail' id='email' required value={this.state.form.email} onChange={ e => this.onChangeValue( e, 'email' )}/>
              <label className='label' htmlFor='email'>Email</label>
            </div>
            <div className='form-group'>
              <input type='text' className='input' placeholder='Subject' id='subject' required value={this.state.form.subject} onChange={ e => this.onChangeValue( e, 'subject' )}/>
              <label className='label' htmlFor='subject'>Subject</label>
            </div>
            <div className='form-group'>
              <textarea type='text' className='input' placeholder='Message' id='content' rows='6' required value={this.state.form.message} onChange={ e => this.onChangeValue( e, 'message' )}/>
              <label className='label' htmlFor='content'>Message</label>
            </div>
            <button className='btn btn-form'>Send</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Form;