import React, { Component } from 'react';
import { DescriptionCategory } from './DescriptionCategory';
import aerisApiLogo from './aerisapi.png';

export class DisplayAirQualityData extends Component {
  constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

        this.state = {
            date: date
        };
    }

  render() {
    const { airData } = this.props

    return(
      <div className="data-wrapper">
        <a href="https://www.aerisweather.com/" target="_blank">
          <img className="aerisApi" src={aerisApiLogo}></img>
        </a>

        {
          airData.map(info => {
            return (
              <div key={info.id} className="data">
                <div className="data__date">{this.state.date}</div>
                <div className="data__city"> {info.place.name}, {info.place.country} </div>
                {
                  info.periods.map(q => {
                    return(
                      <div className="data__quality__periods" key={q.aqi}>
                        <div className="data__quality__aqi">AQI: <br></br>
                          <strong>{q.aqi}</strong>
                        </div>
                        <div className="data__quality">
                          <div className={'data__indicator ' + q.category} style={{backgroundColor: "#" + q.color}}></div>
                          <div className="data__quality__text">{q.category}</div>
                        </div>
                        <div className="data__quality__dominant">Contaminante Dominante:<br></br>
                           <strong>{q.dominant}</strong>
                         </div>
                         <DescriptionCategory category={q.category}/>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )

  }
}
