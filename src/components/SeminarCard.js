const SeminarCard = (props) =>{
  return (
       <div className="card w-25 float-start mx-2 my-1 bg-light">
          <div className="card-body">
            <h4 className="card-title bg-info">{props.name}</h4>
            <p className="card-text"> From: {props.techgrp} , aged {props.age} years</p>
         </div>
     </div>
    );
}

export default SeminarCard;
