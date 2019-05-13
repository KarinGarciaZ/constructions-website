import React, { Component } from 'react';
import employeeImage from '../../Assets/Images/employee.jpg';
import architectsImage from '../../Assets/Images/architects.jpg';

class AboutCompany extends Component {

  handleClick = () => {
    this.props.history.push('/about-us');
  }

  render() {
    return (
      <div className='about-company'>
        <div className='about-company__pictures'>
          <img className='about-company__pictures--big' alt='big-img' src={employeeImage}/>
          <img className='about-company__pictures--small' alt='big-img' src={architectsImage}/>
        </div>
        <div className='about-company__info'>
          <h2 className='u-title-2'>Sobre Nosostros...</h2>
          <p className='u-text-16'>
            Nos mantenemos como lideres de la industria siendo la mejor opción por nuestro excelente
            desempeño. Ofreciendo servicios de desarrollo por más de 25 años.
          </p>
          <p className='about-company__info--message'>
            "Déjanos ser tu mejor decisión."
          </p>
          <button className='btn about-company__info--btn' onClick={this.handleClick}>Conoce más sobre nosotros</button>
        </div>
      </div>
    )
  }
}

export default AboutCompany;