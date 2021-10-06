/* primer columna */
const form = document.querySelector('#dataForm')
form.addEventListener('submit', save)

const removeButton = document.querySelector('#remove')
removeButton.addEventListener('click', remove)

function remove (e){
    localStorage.removeItem ("firstName") /* primer columna */
    localStorage.removeItem ("lastName")
    localStorage.removeItem ("email")
    localStorage.removeItem ("phone")
    txtFirstName.value = ""
    txtLastName.value = ""
    txtEmail.value = ""
    txtPhone.value = ""
    localStorage.removeItem("education") /* segunda columna */
    localStorage.removeItem("start")
    localStorage.removeItem("finish")
    localStorage.removeItem("title")
    txtEduName.value = ""
    txtEduStart.value = ""
    txtEduEnd.value = ""
    txtEduTitle.value = ""
    localStorage.removeItem("company") /* tercer columna */
    localStorage.removeItem("startJob")
    localStorage.removeItem("finishJob")
    localStorage.removeItem("position")
    txtCompanyName.value = ""
    txtJobStart.value = ""
    txtJobEnd.value = ""
    txtJobPosition.value = ""
    localStorage.removeItem("skill1")
    localStorage.removeItem("skill2")
    localStorage.removeItem("skill3")
    localStorage.removeItem("skill4")
    txtSkill1.value = ""
    txtSkill2.value = ""
    txtSkill3.value = ""
    txtSkill4.value = "" 
}

const txtFirstName = document.querySelector('#txtFirstName')
const txtLastName = document.querySelector('#txtLastName')
const txtEmail = document.querySelector('#txtEmail')
const txtPhone = document.querySelector('#txtPhone')

if(localStorage.getItem ("firstName") !=null){
    txtFirstName.value = localStorage.getItem("firstName")
}
if(localStorage.getItem ("lastName") !=null){
    txtLastName.value = localStorage.getItem("lastName")
}
if(localStorage.getItem ("email") !=null){
    txtEmail.value = localStorage.getItem("email")
}
if(localStorage.getItem ("phone") !=null){
    txtPhone.value = localStorage.getItem("phone")
}

function save(e){
    var firstName = txtFirstName.value /* primer columna */
    var lastName = txtLastName.value
    var email = txtEmail.value
    var phone = txtPhone.value 
    localStorage.setItem("firstName",firstName)
    localStorage.setItem("lastName",lastName)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    var institution = txtEduName.value /* segunda columna */
    var startDate = txtEduStart.value
    var endDate = txtEduEnd.value
    var title = txtEduTitle.value
    localStorage.setItem("education",institution) 
    localStorage.setItem("start",startDate)
    localStorage.setItem("finish",endDate)
    localStorage.setItem("title",title)
    var company = txtCompanyName.value /* tercer columna */
    var startJob = txtJobStart.value
    var endJob = txtJobEnd.value
    var position = txtJobPosition.value
    localStorage.setItem("company",company) 
    localStorage.setItem("startJob",startJob)
    localStorage.setItem("finishJob",endJob)
    localStorage.setItem("position",position)
    var skill1 = txtSkill1.value /* cuarta columna */
    var skill2 = txtSkill2.value
    var skill3 = txtSkill3.value
    var skill4 = txtSkill4.value
    localStorage.setItem("skill1",skill1) 
    localStorage.setItem("skill2",skill2)
    localStorage.setItem("skill3",skill3)
    localStorage.setItem("skill4",skill4)
}

/* segunda columna */

const txtEduName = document.querySelector('#txtEduName')
const txtEduStart = document.querySelector('#txtEduStart')
const txtEduEnd = document.querySelector('#txtEduEnd')
const txtEduTitle = document.querySelector('#txtEduTitle')

if(localStorage.getItem ("education") !=null){
    txtEduName.value = localStorage.getItem("education")
}
if(localStorage.getItem ("start") !=null){
    txtEduStart.value = localStorage.getItem("start")
}
if(localStorage.getItem ("finish") !=null){
    txtEduEnd.value = localStorage.getItem("finish")
}
if(localStorage.getItem ("title") !=null){
    txtEduTitle.value = localStorage.getItem("title")
}

/* tercer columna */

const txtCompanyName = document.querySelector('#txtCompanyName')
const txtJobStart = document.querySelector('#txtJobStart')
const txtJobEnd = document.querySelector('#txtJobEnd')
const txtJobPosition = document.querySelector('#txtJobPosition')

if(localStorage.getItem ("company") !=null){
    txtCompanyName.value = localStorage.getItem("company")
}
if(localStorage.getItem ("startJob") !=null){
    txtJobStart.value = localStorage.getItem("startJob")
}
if(localStorage.getItem ("finishJob") !=null){
    txtJobEnd.value = localStorage.getItem("finishJob")
}
if(localStorage.getItem ("position") !=null){
    txtJobPosition.value = localStorage.getItem("position")
}

/* cuarta columna */

const txtSkill1 = document.querySelector('#txtSkill1')
const txtSkill2 = document.querySelector('#txtSkill2')
const txtSkill3 = document.querySelector('#txtSkill3')
const txtSkill4 = document.querySelector('#txtSkill4')

if(localStorage.getItem ("skill1") !=null){
    txtSkill1.value = localStorage.getItem("skill1")
}
if(localStorage.getItem ("skill2") !=null){
    txtSkill2.value = localStorage.getItem("skill2")
}
if(localStorage.getItem ("skill3") !=null){
    txtSkill3.value = localStorage.getItem("skill3")
}
if(localStorage.getItem ("skill4") !=null){
    txtSkill4.value = localStorage.getItem("skill4")
}
