//1 tap

let school = {
    name: "Amjilt Cyber School",
    phoneNumber: 87778888888,
    students: [
        {
            studentName: "Ayala",
            top: 24/6,
            progress: 100,
            lessons: 2
        },
        {
            studentName: "Ailun",
            top: 24/5,
            progress: 90,
            lessons: 2
        },
        {
            studentName: "Alibek",
            top: 24/3,
            progress: 95,
            lessons: 2
        },
        {
            studentName: "Aru",
            top: 24/3,
            progress: 80,
            lessons: 2
        },
    ]
}

//tap2

function changeSchoolName(){
    let aty = prompt("Zhana ataudy zhaz")
    school.name = aty
    console.log(school);   
}




//tap3

function changePhoneName(){
    let nom = prompt("Zhana nomerdi zhaz")
    school.phoneNumber = nom
    console.log(school);
}



//tap4

function listStudentNames(){
    alert(school.name)
}



//tap5

function addStudent(){
    let aty = prompt("Student Aty")
    let ortUlg = +prompt("Jrtasha ulgerimi")
    let sab = +prompt("Oqityn sabak sany")
    let top = +prompt("Oqityn toby")
    students.push(aty,ortUlg,sab,top)
}



//tap6

function applyDecreaseToTop(){
    let top = +prompt("Top atauyn zhaz")
    let paiyz = +prompt("Paiyzdyk molsherde tomendet")
}


//tap7
function menu(){
    let menuu = prompt("Tanda sanmen 1.Atyn ozgerty/2.Nomer ozgerty/3.Studentterdi qory/4.Studen qosy/5.ulgerim tomendety/6.Toqtat")
    
    for (i = 1; i>7; i++){
        if(1 == menu){
            return changeSchoolName();
        } else if( 2 == menu){
            return changePhoneName();
        } else if( 3 == menu){
            return listStudentNames();
        } else if(4 == menu){
            return addStudent();
        } else if(5 == menu){
            return applyDecreaseToTop();
        } else if(6 == menu){
            break;
            alert("Сау болыңыз!")
        } else{
            alert("Qate tanday. Qaitalap koriniz")
        }
    }
}

menu()





