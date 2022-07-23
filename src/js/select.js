function selectYear() {
  const selectYear = document.querySelector('.dropdown-list__year');
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();


  for (let year = 1920; year < currentYear; year++) {
    let options = document.createElement("option")
    selectYear.appendChild(options).innerHTML = year
  }
}

function selectMounth() {
  const selectMounth = document.querySelector('.dropdown-list__mounth')
  const mounth = ["January", "February", "March", "April", "May", "June", "June", "August", "September", "October", "November", "December"]

  for (let i = 0; i < mounth.length; i++) {
    let options = document.createElement("option")
    selectMounth.appendChild(options).innerHTML = mounth[i]
  }
}

function selectDay() {
  const selectDay = document.querySelector('.dropdown-list__day')

  for (let day = 1; day <= 31; day++) {
    let options = document.createElement("option")
    selectDay.appendChild(options).innerHTML = day
  }
}

function selectNationality() {
  const selectNationality = document.querySelector('.form__input-nation')
  const nationality = ["American", "Mexican", "March", "Chilean", "Israeli", "Mongolian", "Burmese", "Romanian", "Russian", "Polish", "Czech", "Italian", "Greek"]

  for (let i = 0; i < nationality.length; i++) {
    let options = document.createElement("option")
    let elem = selectNationality.appendChild(options)
    elem.innerHTML = nationality[i]
    elem.value = nationality[i]

  }
}



selectDay()
selectMounth()
selectYear()

selectNationality()