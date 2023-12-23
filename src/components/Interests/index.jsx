import Interest from './Interest';

export default function Interests() {
  return <div className='container pt-5'>
           <div className=''>
             <h2 className='display-3'>
               Some things I like 😁
             </h2>
           </div>

           <Interest title="Music" id='music' reversed>
             I really like music
           </Interest>

           <Interest title="Triathlon" id="triathlon">
             I don't go fast, but I do go
           </Interest>

           <Interest title="Programming" id="programming" reversed>
             I mean, I built this didn't I?
           </Interest>

           <Interest title="Reading" id="reading">
             Guess who can do it 😎
           </Interest>

           <Interest title="The Small Things" id="the-small-things" reversed>
             You know, coffee and shit
           </Interest>
         </div>
}
