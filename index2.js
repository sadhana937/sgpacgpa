
function calculateGrade(grade, unit) {
  if (grade === "S") {
    return 10 * unit;
  }
  if (grade === "A") {
    return 9 * unit;
  }
  if (grade === "B") {
    return 8 * unit;
  }
  if (grade === "C") {
    return 7 * unit;
  }
  if (grade === "D") {
    return 5 * unit;
  }
  if (grade === "E") {
    return 4 * unit;
  }
  if (grade === "F") {
    return 0 * unit;
  }
}

let count = 0;
document.querySelector("#addsub1").addEventListener("click", addNewSubject);

function addNewSubject() {
  let newForm = document.createElement("form");
  newForm.classList.add("form-1", `get-${count}`);
  const subjectname = `
  <div class="sgpa1">
  <form class="form-1, get-${count}">
  <table  style="margin-left: 450px">
  <tr>
        <td class="sub-get-${count}" style="font-size:24px">Subject:</td>
  <td><select style="padding:15px; border-radius: 18px; border-color: #ffffff; width:150px" class="grade-unit-get-${count}" value="grade" name="grade" required>
  <option value="NULL" class="grade">select</option> 
  <option value="S" class="grade">S</option>
  <option value="A" class="grade">A</option>
  <option value="B" class="grade">B</option>
  <option value="C" class="grade">C</option>
  <option value="D" class="grade">D</option>
  <option value="E" class="grade">E</option>
  <option value="F" class="grade">F</option>

  </select>
  </td>
        <td><input style="padding:15px; border-radius: 18px; border-color: #ffffff; width:80px; " type="number"  class="credit-unit-get-${count}" name="cred" step="0.5" min="1" max="10" placeholder="credits" required></td>
      </tr> 
    </table>
    </form>
  </div>`;

  newForm.innerHTML = subjectname;
  document.querySelector(".sgpa1").appendChild(newForm);
  count++;
}

document.querySelector("#delsub1").addEventListener("click", removesub);

function removesub() {
  let maniform = document.querySelector(".form-1");
  maniform.remove();
}


document.querySelector("#getgrade1").addEventListener("click", sgpacalculator);

function sgpacalculator() {
  const RESULTB = document.getElementById("resultsgpa");
  const GRADESEL = document.querySelectorAll('select[name="grade"]'); // changed selector (attribute selector)
  const UNIT = document.querySelectorAll('input[name="cred"]'); // changed selector (attribute selector)
 
  const listofunits = [];
  const listofgrades = [];

  let totalunits = 0;
  console.log(GRADESEL);
  GRADESEL.forEach((e) => {
    let selectedgrade = e.value;
  
    listofgrades.push(selectedgrade);
  });

  UNIT.forEach((e) => {
    const unitvalue =parseFloat(e.value);
    totalunits += unitvalue;
    listofunits.push(unitvalue);
  });
  console.log(listofgrades);
  console.log(listofunits);
  let totalearnedunits = 0;

  for (let i = 0; i < listofunits.length; i++) {
    totalearnedunits += calculateGrade(listofgrades[i], listofunits[i]);
  }
  const sgpa = totalearnedunits / totalunits;

  if (sgpa >= 0) {
    RESULTB.textContent = "Your SGPA is " + sgpa.toFixed(2);
  } else {
    RESULTB.textContent = "Please enter a correct grade and credits";
  }
}
