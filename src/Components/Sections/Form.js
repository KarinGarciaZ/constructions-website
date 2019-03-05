import React, { Component } from 'react'

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
  }

  render() {
    return (
      <section className='contact-us'>
        <div className='contact-us__img'>
          <form className='contact-us__img--form' onSubmit={ e => this.sendMail(e)}>
            <h2 className='form-title'>
              Send us a message!
            </h2>
            <div className='form-group'>
              <input type='text' className='input' placeholder='Your name' id='name' required value={this.state.form.name} onChange={ e => this.onChangeValue( e, 'name' )}/>
              <label className='label' htmlFor='name'>Your name</label>
            </div>
            <div className='form-group'>
              <input type='email' className='input' placeholder='Your e-mail' id='email' required value={this.state.form.email} onChange={ e => this.onChangeValue( e, 'email' )}/>
              <label className='label' htmlFor='email'>Email</label>
            </div>
            <div className='form-group'>
              <input type='text' className='input' placeholder='Subject' id='subject' required value={this.state.form.subject} onChange={ e => this.onChangeValue( e, 'subject' )}/>
              <label className='label' htmlFor='subject'>Subject</label>
            </div>
            <div className='form-group'>
              <textarea type='text' className='input' placeholder='Your Message' id='content' rows='6' required value={this.state.form.message} onChange={ e => this.onChangeValue( e, 'message' )}/>
              <label className='label' htmlFor='content'>Your message</label>
            </div>
            <button className='btn btn-form'>Send message</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Form;