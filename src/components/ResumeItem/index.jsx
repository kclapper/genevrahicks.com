export default function ResumeItem({
  title,
  location,
  startDate,
  endDate,
  image,
  //imagePos='right',
  children
}) {
  return <div className='pb-4'>
           <div className='d-flex flex-wrap justify-content-between px-lg-4 pb-2'>
             <div className='d-flex flex-column'>
               <h6 className='display-6'>
                 { title }
               </h6>
               <small>{ location }</small>
             </div>
             <div className='mt-auto'>
               <small>{ startDate } </small>
               { endDate ? '-' : '' }
               <small> { endDate }</small>
             </div>
           </div>

           <div className='clearfix border rounded p-lg-2'>
             { image ? <img src={ image } className='col-12 col-lg-6 float-lg-end mb-3 ms-lg-3 rounded' /> : null }
             { children }
           </div>
         </div>
}
