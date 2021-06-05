const headerDate = document.querySelector(".today");
const tbl = document.querySelector(".everyday");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

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
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }

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
const closeModal = document.querySelector(".close");
const numTickets = document.querySelector(".nr-tickets");

num.forEach(n => {
    n.value = 0;
    let minus = n.form[0];
    let plus = n.form[2]
    let btn = n.form[3];
    let count = 0;

    btn.disabled = true;

    plus.addEventListener("click", () => {
        count++
        n.value = count;
        numTickets.innerText = n.value;
        btn.disabled = false;
    });

    minus.addEventListener("click", () => {
        if (count > 0) {
            count--
            n.value = count;
            numTickets.innerText = n.value;

            if (count === 0) {
                btn.disabled = true;
            }
        }
    });
});

const modalImg = document.querySelector(".modal-img");
const modalText = document.querySelector(".model-text");
const important = document.querySelector(".important-wrap");
const form = document.querySelectorAll(".emailform");
const success = document.querySelector(".success-message");
const email = document.querySelectorAll(".email");
const bookingInput = document.querySelector(".booking-input");
const contactInput = document.querySelector(".contact-input");
const sendBtn = document.querySelectorAll(".send");
const contact = document.querySelector(".contact");
const book = document.querySelector(".book");
const successContacted = document.querySelector(".contacted");
const successBooked = document.querySelector(".booked");

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function (e) {
        e.preventDefault()
        modal.style.display = "flex";

        form.forEach(el => {
            el.style.display = "block";
        });

        sendBtn.forEach(btn => {
            btn.disabled = true;
        });

        successBooked.style.display = "none";
        successContacted.style.display = "none";

        let imgsource = e.target.offsetParent.firstElementChild.firstElementChild;
        modalImg.src = "/images/desktop/guided-tour-robot.png";

        if (imgsource) {
            modalImg.src = imgsource.src;
        };

        if (e.target.innerText === "CONTACT US") {
            book.style.display = "none";
            contact.style.display = "block";
            contactInput.style.borderColor = "rgba(255, 255, 255, 0.4)";

            sendBtn.forEach(btn => {
                btn.addEventListener("click", successContact);
            })

        } else {
            important.style.paddingBottom = "8rem";
            book.style.display = "block";
            contact.style.display = "none";

            sendBtn.forEach(btn => {
                btn.addEventListener("click", successBook);
            })
        }
    });
};

closeModal.addEventListener("click", () => {
    modal.style.display = "none";

    form.forEach(el => {
        el.reset();
        el.style.display = "none";
    })
});

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";

        form.forEach(el => {
            el.reset();
            el.style.display = "none";
        })
    }
};

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function submitEmail() {

    if (validateEmail(bookingInput.value) || validateEmail(contactInput.value)) {
        bookingInput.style.borderColor = "green";
        contactInput.style.borderColor = "green";

        sendBtn.forEach(btn => {
            btn.disabled = false;
        })
    } else {
        bookingInput.style.borderColor = "red";
        contactInput.style.borderColor = "red";

        sendBtn.forEach(btn => {
            btn.disabled = true;
        })
    }
};

bookingInput.addEventListener("change", submitEmail);
contactInput.addEventListener("change", submitEmail);

function successContact(e) {
    e.preventDefault();

    form.forEach(el => {
        el.reset();
        el.style.display = "none";
    })

    successContacted.style.display = "block";
    contactInput.style.borderColor = "rgba(255, 255, 255, 0.4)";
};

function successBook(e) {
    e.preventDefault();

    form.forEach(el => {
        el.reset();
        el.style.display = "none";
    })

    successBooked.style.display = "block";
    important.style.paddingBottom = "0";
    bookingInput.style.borderColor = "rgba(255, 255, 255, 0.4)";
};

/**
 * Kids-text dropdown
 */

const newtonian = document.querySelector(".newtonian");
const holiday = document.querySelector(".holiday");
const starsClub = document.querySelector(".stars-club");
const text = document.querySelectorAll(".text");
const checkKids = document.querySelectorAll(".check");

const newtonianText = document.querySelector(".infotext-kids-newtonian");
const holidayText = document.querySelector(".infotext-kids-holiday");
const starsClubText = document.querySelector(".infotext-kids-stars-club");

function addTextInfoKids() {

    newtonian.addEventListener("click", () => {
        if (!newtonian.control.checked) {
            removeTextCheck()
            newtonianText.classList.add("show-text");
        }

        if (newtonian.control.checked) {
            newtonianText.classList.remove("show-text");
        }
    });

    holiday.addEventListener("click", () => {
        if (!holiday.control.checked) {
            removeTextCheck()
            holidayText.classList.add("show-text");
        }

        if (holiday.control.checked) {
            holidayText.classList.remove("show-text");
        }
    });

    starsClub.addEventListener("click", () => {
        if (!starsClub.control.checked) {
            removeTextCheck()
            starsClubText.classList.add("show-text");
        }

        if (starsClub.control.checked) {
            starsClubText.classList.remove("show-text");
        }
    });
};

addTextInfoKids()

function removeTextCheck() {
    checkKids.forEach(kid => {
        kid.checked = false;
    })
    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove("show-text")
    }
};