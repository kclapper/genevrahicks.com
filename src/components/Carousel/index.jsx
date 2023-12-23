import { useEffect, useRef } from 'react';

import Carousel from 'bootstrap/js/dist/carousel';

let photos = [
  new URL('../../photos/boyshike2.jpg?width=600', import.meta.url),
  new URL('../../photos/hazmat.jpg?width=600', import.meta.url),
  new URL('../../photos/friendsstpatricks.jpg?width=600', import.meta.url),
  new URL('../../photos/thursdayboots.jpg?width=600', import.meta.url),
]

for (let i = 0; i < photos.length; i++) {
  let className = i === 0 ? "carousel-item active" : "carousel-item";
  photos[i] = <div key={ photos[i] } className={ className }>
                <img src={ photos[i] } className="d-block w-100" />
              </div>
}

export default function Carousel() {
  const element = useRef(null);

  useEffect(() => {
    if (element.current !== null) {
      const carousel = new Carousel(element.current);
    }
  }, [ element ]);

  return <div ref={ element } id='photoCarousel' className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
             {
               photos
             }
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
}
