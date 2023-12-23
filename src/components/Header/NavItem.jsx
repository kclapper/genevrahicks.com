export default function NavItem({ href, children }) {
  return <li className='nav-item'>
           <a className='nav-link link-primary fs-2 pe-lg-4'
              href={ href }>
             { children }
           </a>
         </li>
}
