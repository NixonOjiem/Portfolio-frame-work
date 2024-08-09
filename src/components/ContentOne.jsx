import React from 'react'

function ContentOne() {
    const womanLearning = new URL("../images/woman Learning.png", import.meta.url)
  return (
    <div id = "contentOne">
        
        <div id="firstHeading">
            <h1>Home</h1>
            <div id="firstImage">
            <img src={womanLearning}/>
            </div>
            </div>
        
        <div id="firstParagraph">
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
    </div>
  )
}

export default ContentOne