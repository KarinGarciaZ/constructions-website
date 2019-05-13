import React, { Component } from 'react';

import Header from '../Components/Layout/Header';
import DescriptionCard from '../Components/Cards/DescriptionCard';
import EmailSection from '../Components/Sections/Form';
import TeamMemberCard from '../Components/Cards/TeamMemberCard';

import TeamImage from '../Assets/Images/team.jpg';
import TeamImage2 from '../Assets/Images/team2.jpg';
import TeamImage3 from '../Assets/Images/team3.jpg';
import BusinessImage from '../Assets/Images/businessman.jpg';
import MB from '../Assets/Images/mb.jpg';

class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {    
    
    let props = { ...this.props };

    return (
      <div className='about-us'>
        <Header { ...props } />
        <div className='about-us__container'>

          <div className='about-us__title'>
            <span className='about-us__title--text'>Sobre Nosotros...</span>
          </div>

          <div className='about-us__objectives'>
            <div className='about-us__objectives--img'>
              <img src={TeamImage} alt='team-img' className='about-us__objectives--img-1'/>
              <img src={TeamImage2} alt='team-img' className='about-us__objectives--img-2'/>
              <img src={TeamImage3} alt='team-img' className='about-us__objectives--img-3'/>
            </div>
            <div className='about-us__objectives--team'>
              <DescriptionCard title='¿Quiénes somos?'>
                Somos una empresa 100% mexicana que lleva desarrollando proyectos por más de 25 años, respaldando a nuestros clientes
                por nuestra gran experiencia y confiabilidad para ser la mejor opción en el mercado.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--mision'>
              <DescriptionCard title='mision'>
                Proporcionar servicios de construcción con la más alta calidad y mejores precios mejorando la expectativa del cliente.
              </DescriptionCard>
            </div>
            <div className='about-us__objectives--vision'>
              <DescriptionCard title='vision'>
                Seguir siendo una empresa líder en el área expandiendonos a nivel nacional manteniendo la misma calidad para el bien de nuestros clientes.
              </DescriptionCard>
            </div>
          </div>          

          <div className='about-us__team-members'>
            <TeamMemberCard rank='Presidente' name='Oscar Garcia' image={BusinessImage}>
              Dirige la gestión diaria de los proyectos y supervisa la asignación y el desarrollo de los recursos laborales de nuestra empresa. 
              Fue líder en otra importante empresa de formación de concreto en Guadalajara antes de comenzar la empresa con su padre y hermano.
            </TeamMemberCard>

            <TeamMemberCard rank='Managers' name='Marcos & Brandon' image={MB}>
              Mantienen las relaciones con los clientes y son responsables de estimar los proyectos tanto en tiempo y costo.
              También proporcionan apoyo logístico y de gestión cotidianos a los distintos sitios de trabajo.
              Cuentan con más de doce años de experiencia como estimadores y gerentes de proyectos.
            </TeamMemberCard>
          </div>          
          
          <EmailSection classes='background-blue' />

        </div>
      </div>
    )
  }
}

export default AboutUs;