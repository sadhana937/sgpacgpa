function calculateprd(sgpa,unit){
  return sgpa* unit;
}

let fcount = 0;
document.querySelector("#addsem1").addEventListener("click",addNewsemester);

function addNewsemester(){
    let newForm1 = document.createElement("form");
    newForm1.classList.add("form-2",`get-${fcount}`);
    const semestername = `
    <div class="cgpa1">
    <form class="form-2, get-${fcount}">
    <table style="margin-left: 400px">
  
  <tr>
     <td class="sem-get-${fcount}" style="font-size:24px">Semester:</td>
      <td><input  style="padding:15px; border-radius: 18px; border-color: #ffffff; width:150px;" class="sem-get-${fcount}" type="number" name="SGPA" value="SGPA" placeholder="SGPA" min="0" required>
 </td>
       <td><input  style="padding:15px; border-radius: 18px; border-color: #ffffff; width:80px; " class="sem-cred-get-${fcount}" type="number" name="credit" value="credit" placeholder="credits" min="1" step="0.5" required></td>
     </tr>
   </table>
    </form>
    </div>
    
    `;

    newForm1.innerHTML =semestername;
    document.querySelector(".cgpa1").appendChild(newForm1);
    fcount++;
}

document.querySelector('#delsem1').addEventListener("click",removesem);
function removesem(){
  let maniform1=document.querySelector(".form-2");
  maniform1.remove();

}

document.querySelector("#getgrade01").addEventListener("click",cgpacalculator);

function cgpacalculator(){
  const RESULTC = document.getElementById("resultcgpa");
  const SGPASEL= document.querySelectorAll('input[name="SGPA"]');
  const UNITC= document.querySelectorAll('input[name="credit"]');
const listofunitsc=[];
const listofsgpas=[];


let totalunitsc=0;

console.log(SGPASEL);
SGPASEL.forEach((e) =>{
  const sgpaval = parseFloat(e.value);
  listofsgpas.push(sgpaval);
}
);

console.log(listofsgpas);

UNITC.forEach((e) => {
  const unitvalc =parseFloat(e.value);
  totalunitsc += unitvalc;
  listofunitsc.push(unitvalc);
});

console.log(listofunitsc);

let totalearnedunitsc =0;
for(let i=0; i<listofunitsc.length;i++){
  totalearnedunitsc += calculateprd(listofsgpas[i],listofunitsc[i]);
}

const cgpa = totalearnedunitsc / totalunitsc;

if(cgpa>=0){

  RESULTC.textContent = "Your CGPA is " + cgpa.toFixed(2);

}
else{
  RESULTC.textContent = "Please enter correct SGPA and credits";
}

}
