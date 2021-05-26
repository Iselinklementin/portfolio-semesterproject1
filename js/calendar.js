const headerDate = document.querySelector(".today");
const tbl = document.querySelector(".everyday");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const jump = document.querySelector(".jump-to-current");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthAndYear = document.querySelector(".monthAndYear");
showCalendar(currentMonth, currentYear);

const nextBtn = document.querySelector(".nextbtn");
const prevBtn = document.querySelector(".previous");

function showCalendar(month, year) {

    let firstDay = new Date(year, month).getDay();
    tbl.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;

    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        row.classList.add("row")

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            cell.classList.add("day");

            if (i === 0 & j < firstDay - 1) {
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("chosen-date");
                    cell.classList.add("todays-date");
                    headerDate.innerText = today.getDate() + ". " + months[month] + " " + year;

                    // function jumpToCurrent() {
                    //     showCalendar(currentMonth, currentYear);
                    //     headerDate.innerText = today.getDate() + ". " + months[month] + " " + year;
                    //     cell.classList.add("chosen-date");
                    //     cell.classList.add("todays-date");
                    // }
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        // jump.addEventListener("click", jumpToCurrent);

        const weekTest = document.querySelectorAll(".row");

        let weekends = Array.from(weekTest);
        weekends.map(week => {
            let findDays = week.childNodes;

            let day = Array.from(findDays)
            if (day[5] || day[6] || day[7]) {
                let weekend = [day[5],
                    day[6],
                    day[7]
                ]

                weekend.forEach(d => {
                    if (d) {
                        d.classList.add("weekends")
                    }
                })
            }
        })
        tbl.appendChild(row);
    }
};

function changeDay() {
    let day = document.querySelectorAll(".day");

    day.forEach(d => {
        d.addEventListener("click", (e) => {

            let weekRow = document.querySelectorAll(".row");
            let weeksArr = Array.from(weekRow);

            weeksArr.map(w => {
                let child = w.children;
                let childrenArr = Array.from(child);
                childrenArr.forEach(c => {
                    if (c.classList.contains("chosen-date")) {
                        c.classList.remove("chosen-date")
                    }
                })
            })

            e.target.classList.add("chosen-date");
            headerDate.innerText = e.target.innerText + ". " + monthAndYear.innerText;
        })
    })
};

changeDay();

function next() {
    currentYear = (currentMonth === 1) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
    changeDay()
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
    changeDay()
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);


const num = document.querySelectorAll(".input-text");
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll("[data-close]");

num.forEach(n => {
    n.value = 0;
    let minus = n.form[0];
    let plus = n.form[2]
    let btn = n.form[3];
    btn.disabled = true;
    let count = 0;

    plus.addEventListener("click", (e) => {
        count++
        n.value = count;
        btn.disabled = false;
    });

    minus.addEventListener("click", () => {
        if (count > 0) {
            count--
            n.value = count;

            if (count === 0) {
                btn.disabled = true;
            }
        }
    });
});

let modalImg = document.querySelector(".modal-img");


for(let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function(e) {
        e.preventDefault()
      modal.style.display = "flex";
      modalImg.src = e.target.offsetParent.firstElementChild.firstElementChild.src
    console.log(e.target.offsetParent.firstElementChild.firstElementChild.src)
    });
  };

  window.onclick = function(event) {
    if (event.target === modal) {
          modal.style.display = "none";
    }
}