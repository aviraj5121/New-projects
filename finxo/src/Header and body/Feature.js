import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './feature.css'
const Feature = () => {
    return (
       <div className='box'>
         <Carousel
        showThumb={false}
        autoplay ={true}
        tansitonTime={0.5}
        infiniteLoop={true}
        showStatus={false}>
            <div class="container">
                <div class="card">
                    <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
                    </div>
                    <div class="card__body">
                        <h4>What's new in 2022 Tech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card">
                    <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
                    </div>
                    <div class="card__body">
                        <h4>What's new in 2022 Tech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card">
                    <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
                    </div>
                    <div class="card__body">
                        <h4>What's new in 2022 Tech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card">
                    <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
                    </div>
                    <div class="card__body">
                        <h4>What's new in 2022 Tech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card">
                    <div class="card__header">
                        <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600" />
                    </div>
                    <div class="card__body">
                        <h4>What's new in 2022 Tech</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                    </div>
                </div>
            </div>
        </Carousel>
       </div>
    )
}

export default Feature
