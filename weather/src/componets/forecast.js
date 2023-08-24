import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import './forecast.css'
function Forecast({ data }) {
  return (
    <div className='box-1'>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,ind) =>(
                <AccordionItem key={ind}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='box-2'>
                            <label className='day'></label>
                            <label className='description'>{item.weather[0].description}</label>
                            <label className='min-max'>{item.main.temp_min} / {item.main.temp_max} </label>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-details-grid'>
                            <div className='daily-detials-grid-item'>
                            <label>Pressure</label>
                            <label>{item.main.pressure}</label>
                            </div>
                            <div className='daily-detials-grid-item'>
                            <label>Humidity</label>
                            <label>{item.main.humidity}</label>
                            </div>
                            <div className='daily-detials-grid-item'>
                            <label>Clouds</label>
                            <label>{item.clouds.all}</label>
                            </div>
                            <div className='daily-detials-grid-item'>
                            <label>wind speed</label>
                            <label>{item.wind.speed}</label>
                            </div>
                            <div className='daily-detials-grid-item'>
                            <label>Feel Like</label>
                            <label>{item.main.feels_like}</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
      </Accordion>
    </div>
  );
}

export default Forecast;
