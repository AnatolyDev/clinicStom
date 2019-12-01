import React from 'react';
import './style.css';

import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
    {
      src: './img/carousel/1.jpg',
      altText: 'Slide 1',
      caption: 'Индивидуальный подход',
      header: ''
    },
    {
      src: './img/carousel/2.jpg',
      altText: 'Slide 2',
      caption: 'Профессиональная чистка',
      header: ''
    },
    {
      src: './img/carousel/3.jpg',
      altText: 'Slide 3',
      caption: 'Современная диагностика',
      header: ''
    },
    {
      src: './img/carousel/4.jpg',
      altText: 'Slide 4',
      caption: 'Широкий перечень услуг',
      header: ''
    }
  ];

function Home() {
    return (
      <Container>
        <UncontrolledCarousel items={items} />
      </Container>
    )
}

export default Home;