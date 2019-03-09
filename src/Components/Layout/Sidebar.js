import React, { Component } from 'react'

class Sidebar extends Component {
  render() {

    let newElements = [];
    let elements = { ...this.props.elements };

    for ( let element in elements ) {
      let newElement = null;

      switch (elements[element].elementType) {
        case 'input':
          newElement = (<input type={elements[element].type} value={elements[element].value} onChange={ e => this.props.changed(e, element) } className='sidebar__content--input'/>)
          break;
        case 'select':
          newElement = (<select className='sidebar__content--input' value={elements[element].value} onChange={ e => this.props.changed(e, element) } >
            { elements[element].options.map( option => {
              return (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              )
            }) }
          </select>)
          break;
      
        default:
          newElement = (<input type={elements[element].type} value={elements[element].value} className='sidebar__content--input'/>)
          break;
      }

      newElements.push(
        <div className='sidebar__content' key={element}>
          <label className='sidebar__content--label'>{element}</label>
          {newElement}
        </div>
      )
    }


    return (
      <div className='sidebar'>
        <p className='sidebar__title'>Filter construction</p>
        {newElements}
      </div>
    )
  }
}

export default Sidebar;