export default function Interest({ id, title, reversed=false, children }) {
  return <div>
           <h3 id={ id } className={ 'display-4 ' + (reversed ?  "text-end" : "text-start") }>
             { title }
           </h3>
           <p>
             { children }
           </p>
         </div>
}
