
$(document).ready(function () {
    patients = [];
    const patientForm = $('#patientForm').on('submit', processForm)

    let outPatientValue="";
    const outPatient = $(':radio').on('click', saveOutPatient);
    function saveOutPatient(evt){
        outPatientValue =  this.value;
        console.log(this.value);
    }
    function processForm(evt) {
        evt.preventDefault();
        const patientId = $('#patientIdNumber').val();
        const firstName = $('#firstName').val();
        const middleInitials = $('#middleInitials').val();
        const lastName = $('#lastName').val();
        const ddlDepartment = $('#ddlDepartment').val();
        const dateOfBirth = $('#dateOfBirth').val();
        const dob = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
       


        //Create Patient Object
        let patient = {
            patientId: patientId,
            firstName:firstName,
            middleInitials:middleInitials,
            lastName:lastName,
            ddlDepartment:ddlDepartment,
            dateOfBirth:dateOfBirth,
            outPatient:outPatientValue,
            dob:dob
        }
        //Insert into Patients List
        
        patients.push(patient);

        const tbodyPatientsList = document.getElementById("tbodyPatientsList");
        tbodyPatientsList.innerHTML = "";
        showAll();
    }
    
    const chkElderlyPatients = $('#chkElderlyPatients');
    chkElderlyPatients.on('change', ()=>{
        if(this.checked){
            console.log('here');
            showElderly();
        }
        else{
            showAll();
        }
    });
    // const chkElderlyPatients = document.getElementById('chkElderlyPatients');
    // chkElderlyPatients.addEventListener('change', ()=>{
    //     if(chkElderlyPatients.checked){
    //         console.log('here');
    //         showElderly();
    //     }
    //     else{
    //         showAll();
    //     }
    // });
    const chkShowOutPatients = $('#chkShowOutPatients');
    chkShowOutPatients.change(()=>{
        console.log(this);
        if(this.checked){
            showOutPatient();
        }
        else{
            showAll();
        }
    });
    // const chkShowOutPatients = document.getElementById('chkShowOutPatients');
    // chkShowOutPatients.addEventListener('change', ()=>{
    //     if(chkShowOutPatients.checked){
    //         showOutPatient();
    //     }
    //     else{
    //         showAll();
    //     }
    // });


    function showElderly(){
        tbodyPatientsList.innerHTML = "";
        patients.filter(patient=> patient.dob >= 65 )
        .map(patient => {
            console.log(patient);
            let row = tbodyPatientsList.insertRow();
            const patientId = row.insertCell(0);
            patientId.innerHTML = patient.patientId;
            const firstName = row.insertCell(1);
            firstName.innerHTML = patient.firstName;
            const middleInitials = row.insertCell(2);
            middleInitials.innerHTML = patient.middleInitials;
            const lastName = row.insertCell(3);
            lastName.innerHTML = patient.lastName;
            const dateOfBirth = row.insertCell(4);
            dateOfBirth.innerHTML = patient.dateOfBirth;
            const ddlDepartment = row.insertCell(5);
            ddlDepartment.innerHTML = patient.ddlDepartment;
            const outPatient = row.insertCell(6);
            outPatient.innerHTML = patient.outPatient;
    
        });
    }
    function showOutPatient(){
        tbodyPatientsList.innerHTML = "";
        patients.filter(patient=> patient.outPatient === 'Yes')
        .map(patient => {
            let row = tbodyPatientsList.insertRow();
            const patientId = row.insertCell(0);
            patientId.innerHTML = patient.patientId;
            const firstName = row.insertCell(1);
            firstName.innerHTML = patient.firstName;
            const middleInitials = row.insertCell(2);
            middleInitials.innerHTML = patient.middleInitials;
            const lastName = row.insertCell(3);
            lastName.innerHTML = patient.lastName;
            const dateOfBirth = row.insertCell(4);
            dateOfBirth.innerHTML = patient.dateOfBirth;
            const ddlDepartment = row.insertCell(5);
            ddlDepartment.innerHTML = patient.ddlDepartment;
            const outPatient = row.insertCell(6);
            outPatient.innerHTML = patient.outPatient;
    
        });
    }
    function showAll(){
        tbodyPatientsList.innerHTML = "";
        patients.map(patient => {
            let row = tbodyPatientsList.insertRow();
            const patientId = row.insertCell(0);
            patientId.innerHTML = patient.patientId;
            const firstName = row.insertCell(1);
            firstName.innerHTML = patient.firstName;
            const middleInitials = row.insertCell(2);
            middleInitials.innerHTML = patient.middleInitials;
            const lastName = row.insertCell(3);
            lastName.innerHTML = patient.lastName;
            const dateOfBirth = row.insertCell(4);
            dateOfBirth.innerHTML = patient.dateOfBirth;
            const ddlDepartment = row.insertCell(5);
            ddlDepartment.innerHTML = patient.ddlDepartment;
            const outPatient = row.insertCell(6);
            outPatient.innerHTML = patient.outPatient;
    
        });
    }
});

