import React, { Component } from 'react';

export class DescriptionCategory extends Component {
  render() {
    const { category } = this.props
    var description = 'N/A'
    if (category === 'good') {
      description = 'La calidad del aire se considera satisfactoria y la \
      contaminación atmosférica presenta un riesgo escaso o nulo.'
    }
    if (category === 'moderate') {
      description = 'La calidad del aire es aceptable pero para algunos \
      contaminantes podría existir una preocupación moderada para la salud de un \
       grupo muy pequeño de personas excepcionalmente sensibles a la \
       contaminación ambiental.'
    }
    if (category === 'usg') {
      description = 'Los miembros de grupos sensibles pueden padecer efectos en \
      la salud. Probablemente no afectará a las personas en general.'
    }
    if (category === 'unhealthy') {
      description = '	Todos pueden comenzar a padecer efectos en la salud y los \
       miembros de grupos sensibles pueden padecer efectos más graves.'
    }
    if (category === 'very Unhealthy') {
      description = 'Advertencias sanitarias de condiciones de emergencia. \
      Son mayores las probabilidades de que toda la población esté afectada.'
    }
    if (category === 'hazardous') {
      description = 'Alerta sanitaria: todos pueden padecer efectos \
      sanitarios más graves.'
    }
    console.log(category)
    return(
      <p className="data__quality__description">{description}</p>
    )
  }
}
