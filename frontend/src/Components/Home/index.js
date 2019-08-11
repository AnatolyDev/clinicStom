import React from 'react';
import './style.css';

import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
    {
      src: './carousel/1.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header'
    },
    {
      src: './carousel/2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: './carousel/3.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    },
    {
      src: './carousel/4.jpg',
      altText: 'Slide 4',
      caption: 'Slide 4',
      header: 'Slide 4 Header'
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