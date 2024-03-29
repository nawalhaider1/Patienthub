import React, { Component } from "react"; 
import { Helmet } from "react-helmet"; 
import icon from  "../image/tooth-solid.svg"
 
class StoryPage extends Component { 
  render() { 
    return ( 
      <div className="all"> 
        <Helmet> 
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
          /> 
        </Helmet> 
        <br></br>
             <section> 
    <div class="icon"> 
      <div class="par"> 
        <h2 className="rr1">؟     PatientHub لماذا     </h2> 
      
      <div className="flex item-center justify-end space-x-5">
      <p>    تعمل هذه المنصة بالتعاون بين الطلاب في جامعة طب الأسنان والمؤسسات التعليمية المشاركة   <img src={icon} alt="" />   </p>
      
      </div>
      <div className="flex item-center justify-end space-x-5">
      <p>يتم تنظيم فرق من الطلاب المدربين جيدًا لتقديم العناية الفموية الأساسية والخدمات العلاجية المجانية للمرضى  <img src={icon} alt="" /></p> 
      
      </div>
      <div className="flex item-center justify-end space-x-5">
      <p> .حيث يحصلون على فرصة قيمة لتطوير مهاراتهم  واكتساب الخبرة العملية اللازمة في مجال طب الأسنان <img src={icon} alt="" /> </p> 
      
      </div>
    

    </div> 
        </div> 
        
         
 
        <div class="icon"> 
          <div class="par2"> 
            <h2 className="rr1">خدماتنا </h2> 
            <div className="flex item-center justify-end space-x-5">
            <p>تضمن الخدمات التي يقدمها الطلاب على هذه المنصة الفحص الشامل للفم والأسنان <img src={icon} alt="" /></p>  
           
            </div>
            <div className="flex item-center justify-end space-x-5">
            <p> عمليات التنظيف الأساسية وتلميع الأسنان <img src={icon} alt="" /></p> 
            
            </div>
            <div className="flex item-center justify-end space-x-5">

            <p>  تركيب حشوات الأسنان والأطقم المؤقتة <img src={icon} alt="" />
 </p>
            
            </div>
            <div className="flex item-center justify-end space-x-5">

            <p> قلع الأسنان التالفة  <img src={icon} alt="" /></p>
            
            </div>
           {/* <p>تركيب الأطقم المؤقتة   <i class="fas fa-star mr-2"></i></p>  */}
        </div> 
          </div> 
         
  
</section> 

        </div> 
 
        ); 
    } 
} 
  
export default StoryPage ;