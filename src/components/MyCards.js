import Data from '../Data.json';
import SeminarCard from './SeminarCard';
const MyCards = () => { 

    console.log(Data.data);
    return (        
        <div>
            <h4> Cards here</h4>
            {
                Data.data.map((elem) => {
                     return   <SeminarCard key={elem.id} name={elem.name} state={elem.techgrp} age={elem.age} />
                }
                   
                )
            }
        </div>
     );
}
 
export default MyCards;
