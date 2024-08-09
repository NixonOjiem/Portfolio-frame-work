import React from 'react'

function ContentTwo() {
    const childrengoingtoschool = new URL("../images/children-going-to-school.jpg", import.meta.url)
  return (
    <div id="contentTwo">
        
        
        <div id="secondParagraph">
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?<br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat ratione ad earum totam eum alias, sit eveniet consequatur quae labore? 
                In velit eius incidunt, quasi numquam animi odio officia ut?
            </p>
            </div>
        
        <div id="secondImage">
        <h1>Home</h1>
        <img width= '650' height= '500' src={childrengoingtoschool} id='children'/>
        </div>

       
    </div>
  )
}

export default ContentTwo