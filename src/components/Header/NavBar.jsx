import { useEffect, useRef } from 'react';

import Collapse from 'bootstrap/js/dist/collapse';

import './NavBar.scss';

import NavItem from './NavItem';

const headshot = new URL('./NYC-Headshot.jpg?width=500', import.meta.url);

const defaultShow = window.matchMedia("(min-width: 992px)").matches;

export default function NavBar({ children }) {
  const element = useRef(null);

  useEffect(() => {
    if (element.current !== null) {
      new Collapse(element.current, {toggle: false});
    }
  }, [ element ]);

  return <div className='navbar-expand-lg'>
           <div className='d-flex flex-wrap justify-content-center border-bottom py-4'>
             <a href="/" className='pb-2 pb-lg-0 pe-lg-4'>
               <img id='header-headshot'
                    className='img-fluid rounded-circle shadow-lg'
                    src={ headshot }
                    alt="Genevra's Headshot" />
             </a>

             <div className="d-flex flex-column align-items-center justify-content-center text-center">
               <a href='/' className='text-black text-decoration-none'>
                 <h2 className='display-2'>
                   Genevra Hicks
                 </h2>
               </a>
               <div ref={ element } className={ defaultShow ? 'collapse show' : 'collapse' } id='navMenuCollapse'>
                 <ul className='navbar-nav'>
                   { children }
                 </ul>
               </div>
             </div>
           </div>
         </div>
}
