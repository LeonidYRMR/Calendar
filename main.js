const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
const monthAndYear = document.querySelector(".monthAndYear");
const tbl = document.querySelector(".calendar-body");

const Months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// запуск функции
Calendar(currentYear, currentMonth);

// кнопка следующий месяц
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    Calendar(currentYear, currentMonth);
};

// кнопка предыдущий месяц
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    Calendar(currentYear, currentMonth);
};

// кнопка сегодня
function extra() {
    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    Calendar(currentYear, currentMonth);
};

function Calendar(year, month) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    // обнуляем ячейки
    tbl.innerHTML = "";

    // записываем текущий месяц
    monthAndYear.innerHTML = Months[month] + " " + year;

    // создаем ячейки
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // создаем строки
        let row = document.createElement("div");
        row.classList.add("row");

        //создаем ячейки и заполняем датами
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("div");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("div");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today-bg-color");
                } 
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // добавляем строки
    }

};































































// const CellDate = document.querySelectorAll(".headding-date") //даты в ячейках
// const CellDayOfWeek = document.querySelectorAll(".headding-text") //днь недели в ячейках
// const MounthName = document.querySelector(".month") //месяц

// // Дни недели с понедельника
// let DaysOfWeek = [
//  "Понедельник, ",
//  "Вторник,",
//  "Среда,",
//  "Четверг,",
//  "Пятница,",
//  "Суббота,",
//  "Воскресенье,"
// ];

// // Месяцы начиная с января
// const Months = [
//   "Январь",
//   "Февраль",
//   "Март",
//   "Апрель",
//   "Май",
//   "Июнь",
//   "Июль",
//   "Август",
//   "Сентябрь",
//   "Октябрь",
//   "Ноябрь",
//   "Декабрь",
// ];

// //Устанавливаем текущий месяц, год
// const d = new Date();
// let currentYear = d.getFullYear();
// let currentMonth = d.getMonth();   //+1 
// let currentDay = d.getDay() -1;


// // Текущий месяц и год------------------------
// Months.forEach((element, index) => {
//     if (currentMonth == index) {
//         MounthName.innerHTML = element + ' ' + currentYear;
//     }
// });
  
// // заголовок дней недели-----------------------
// for (let i=0; i < DaysOfWeek.length;i++) {
//     // const currentText = CellDayOfWeek[i].textContent
//     CellDayOfWeek[i].insertAdjacentHTML = DaysOfWeek[i];
//     // CellDayOfWeek[i].textContent = currentText + " " + numm ();
//     // console.log(currentText)
// };


// function ShowMonth(y, m, i) {

//     const d = new Date()
//     // Первый день недели в выбранном месяце 
//     let firstDayOfMonth = new Date(y, m, 7).getDay()
//     console.log(firstDayOfMonth);
//     // Последний день выбранного месяца
//     let lastDateOfMonth =  new Date(y, m+1, 0).getDate()
//     console.log(lastDateOfMonth);
//     // Последний день предыдущего месяца
//     let lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
//     console.log(lastDayOfLastMonth);

//     // Кол-во дней в месяце
//     let date1 = new Date(y, m, 1);
//     let date2 = new Date(y, m+1, 1);
//     let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

//     // если дни начинаются с понедельника, записывать их с понедельника
//     let DoW = new Date(y, m, i)
//     let u = 0;
//     do {

//     if (i == 1) {
//         CellDate[u].innerHTML = u+1;
//         u++;
//     } else if (i != 1){
//         let k = lastDayOfLastMonth - firstDayOfMonth+1;
//       for (let j=0; j < firstDayOfMonth; j++) {
//         let u = 0;
//         CellDate[u].innerHTML = k;
//         k++;
//       }
//     } else if (j = firstDayOfMonth) {
//         CellDate[u].innerHTML = u+1;
//         u++;
//     } 

// } while(u < lastDateOfMonth) 
//     console.log(DoW);
// };

// ShowMonth(2022, 6, 1);








// Заполняем календарь датами--------------------
// function numm () {
//     for (let i = 0; i <= 34; i++) {
//         if (i > 30) {
//             break;
//         } else {
//             CellDate[i].innerHTML = i+1;
//         };
//       }
// }

// for (let i = 0; i <= 34; i++) {
//     if (i > 30) {
//         break;
//     } else {
//         CellDate[i].innerHTML = i +1;
//     }
//   }










  // let firstDayOfMonth
// let lastDateOfMonth
// let lastDayOfLastMonth

// function ThisMounth (currentYear, currentMonth){
// // Первый день недели в выбранном месяце-------------------------------------------------------
// firstDayOfMonth = new Date(currentYear, currentMonth, 7).getDay()

// // Последний день выбранного месяца------------------------------------------------------------
// lastDateOfMonth =  new Date(currentYear, currentMonth+1, 0).getDate()

// // Последний день предыдущего месяца-----------------------------------------------------------
// lastDayOfLastMonth = currentMonth == 0 ? new Date(currentYear-1, 11, 0).getDate() : new Date(currentYear, currentMonth, 0).getDate();

// }
