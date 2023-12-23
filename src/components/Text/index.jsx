export default function Text({ bg="none", text='black', children, ...props }) {
  return <p className={ 'rounded p-4 mt-3 bg-' +  bg + ' text-' + text} { ...props }>
           { children }
         </p>
}
