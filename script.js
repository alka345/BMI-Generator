
const form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.getElementById("height").value);
    const weight =parseInt(document.getElementById("weight").value);
    if(height===''||height<0||isNaN(height)){
        results.innerHTML="Please enter a valid height"
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML="Please enter a valid weight"
    } else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
    
        function summary(b){
            if(b < 18.6){
            
                return "Under Weight";
                
            }
            else if(18.6 >= b && b<=24.9){
            
                return "Normal Range";
                
            }
            else{
            //  if(b >= 24.9){
            
                return "Over Weight";
               
            }
        }
            
        results.innerHTML=`<span>${bmi}</span>`
        report.innerHTML=`<h3>${
    summary(bmi)}</h3>`;

        }
})