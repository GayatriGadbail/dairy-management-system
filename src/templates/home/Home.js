import React from 'react'
import './Home.css'
import backgroundImage from '../../assets/backgroundImage.jpg'
function Home() {
 
  return (
    <div>
    <div >
    
        <h3 className='head text-center mt-4'>Welcome to Dairy Management System</h3>
       
    </div>
   
    <div className='ms-4 color fs-5 '>
     <table>
      <tr>
        <td>

       
    Manage the overall process safety, health management, risk<br/> assessment and product quality checks with our feature-rich dairy
    <br/> management software.<br/>
    Monitor each step of your production and supply chain<br/> management with easy data visualisation prospects that the <br/>
    application we develop for your dairy management system. Build <br/>custom software from scratch that will cover the end-to-end of<br/>
     your operational requirements with ease. We’ll also help you with <br/>easy integration and implementation assistance as per your dairy<br/> management needs.
    <br/>All our developers carry diverse field experience in handling niche <br/>software development services like these. Build your idea into a<br/>
     concrete end dairy management product with us. Brainstorm <br/>alongside our expert team to check the feasibility of your idea and 
     <br/>improve your overall productivity levels in no time.

     </td>
     <td>
     <img src={backgroundImage} width={700} height={400}/> 
     </td>

</tr>
</table>
    </div>
    </div>
  )
}

export default Home