const InputData = document.querySelector(".input-container")
console.log(InputData);

InputData.addEventListener('submit',(event)=>{
    event.preventDefault()
    const empName = document.getElementById('empname').value;
    const Address = document.querySelector('#address').value;
    const designation = document.querySelector('#Designation').value;
    const date = document.getElementById('date').value;
    const salary = parseInt(document.getElementById('salary').value);
    let workinDays =parseInt(document.getElementById("workingDays").value)
    let leaves = parseInt(document.getElementById("leaves").value)
    if(!Number(salary,workinDays,leaves)){
        alert("Please valid Salary ");
    }
    else{

        // console.log(empName,Address,designation,date,salary,date,E_leave,E_mday);
        showDetals(empName,Address,designation,date,salary,workinDays,leaves);
    }


})


function showDetals(empName,Address,designation,date,salary,workinDays,leaves){
    let E_name =document.getElementById("E_name");
    let E_mday =document.getElementById("E_mday");
    let E_address= document.getElementById("E_address");
    let E_leave = document.getElementById("E_leave");
    let E_designation = document.getElementById("E_designation");
    let E_date = document.getElementById('E_date');
    let E_present = document.getElementById('E_present');
   

        E_name.innerHTML=`${empName}`;
        E_address.innerHTML=`${Address}`;
        E_designation.innerHTML=`${designation}`;
        E_date.innerHTML=`${date}`;
        // E_salary.innerHTML=`${salary}`
        E_mday.innerHTML=`${workinDays}`;
        E_leave.innerHTML=`${leaves}`;
        E_present.innerHTML=`${workinDays-leaves}`;
        calculateSarary(salary);
    
}

function calculateSarary(salary){
    let basic = document.getElementById("B_salary")
    let pf = document.getElementById("pf")
    let DA  = document.getElementById("DA")
    let tax  = document.getElementById("tax")
    
    let HRA  = document.getElementById("HRA")
    let Gross  = document.getElementById("Gross")
    let total_D = document.getElementById("Total_D")
    let net_S = document.getElementById("Net_S")

    basic.innerHTML=`${salary}`
    pf.innerHTML = `${(salary/100)*10}`
    DA.innerHTML=`${salary/100*10}`
    HRA.innerHTML=`${salary/100*12}`
    tax.innerHTML=`${salary/100*5}`
    Gross.innerHTML= `${salary+ (salary/100*10)+(salary/100*12)}`
    total_D.innerHTML=`${(salary/100)*10+(salary/100*5)}`
    net_S.innerHTML =`${salary+ (salary/100*10)+(salary/100*12)+(salary/100)*10+(salary/100*5)}`

}