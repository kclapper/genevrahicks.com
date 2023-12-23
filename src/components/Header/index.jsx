import NavBar from './NavBar';
import NavItem from './NavItem';

export default function Header() {
  return <>
           <button className='navbar-toggler position-absolute top-0 end-0 p-4 d-lg-none'
                   type='button'
                   data-bs-toggle='collapse'
                   data-bs-target='#navMenuCollapse'
                   aria-expanded='true'
                   aria-controls='navMenuCollapse'>
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
             </svg>
           </button>

           <NavBar>
             <NavItem href='/diet'>
               Diet
             </NavItem>

             <NavItem href='/cs210'>
               CS210
             </NavItem>
           </NavBar>
         </>
}
