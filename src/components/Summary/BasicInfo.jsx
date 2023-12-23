const goodboy = new URL('../../photos/goodboy.jpg?width=500', import.meta.url);

export default function BasicInfo() {
  return <div className='card info-card mx-auto text-bg-secondary' id="basic-info">
           <div className='row g-0 jutify-content-center align-items-stretch'>
             <div className='col-6 col-lg-12'>
               <img src={ goodboy } className='img-fluid rounded-start' alt="Me and a dog that isn't mine"/>
             </div>
             <div className='col-6 col-lg-12 my-auto'>
               <div className='card-body h-100'>
                 <h5 className='card-title'>
                   Basic Info
                 </h5>
                 <ul className='card-text'>
                   <li>
                     Age: 26
                   </li>

                   <li>
                     Gender: Male
                   </li>

                   <li>
                     Pronouns: He/Him
                   </li>

                   <li>
                     Sexual Orientation: Straight
                   </li>

                   <li>
                     Zodiac: Aquarius Sun, Gemini Moon, Gemini Rising
                   </li>

                   <li>
                     Blood type: O-
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
}
