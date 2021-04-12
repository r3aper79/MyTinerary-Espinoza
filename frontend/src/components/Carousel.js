import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import ContentSlice from './ContentSlice'


const items = [
  [
    {src: 'Bergen-Noruega.jpg', titulo: 'Bergen', id: '1'},
    {src: 'Budapest.jpg', titulo: 'Budapest', id: '2'},
    {src: 'buenos-aires.jpg', titulo: 'Buenos Aires', id: '3'},
    {src: 'ciudad-del-cabo.jpg', titulo: 'Ciudad del Cabo', id: '4'}
  ],
  [
    {src: 'Edimburgo.jpg', titulo: 'Edimburgo', id: '5'},
    {src: 'janeiro.jpg', titulo: 'Rio de Janeiro', id: '6'},
    {src: 'Kyoto.jpg', titulo: 'Kyoto', id: '7'},
    {src: 'Luang.jpg', titulo: 'Luang', id: '8'}
  ],
  [
    {src: 'Queenstown.jpg', titulo: 'Queenstown', id: '9'},
    {src: 'sidney.jpg', titulo: 'Sidney', id: '10'},
    {src: 'singapore.jpg', titulo: 'Singapore', id: '11'},
    {src: 'vancouver.jpg', titulo: 'Vancouver', id: '12'}
  ]
]


const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }


  let new_key = 0
  const slides = items.map((item) => {
    new_key++
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={new_key}
      >
        <ContentSlice item={item} />
        
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;