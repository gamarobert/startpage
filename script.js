const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})

//References
//https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
//https://bobbyhadz.com/blog/javascript-change-getseconds-to-2-digits#:~:text=To%20change%20the%20getSeconds(),the%20start%20of%20the%20string.

function getTime() {
    const now = new Date()
    let currentTime = formatAMPM(now)
    document.getElementById("currentTime").innerHTML = currentTime;    
}

function formatAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = String(date.getSeconds()).padStart(2, '0')
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = String(hours ? hours : 12).padStart(2, '0')
    minutes = minutes < 10 ? '0'+minutes : minutes
    let strTime = hours + '.' + minutes + '.' + seconds + ' ' + ampm
    return strTime
  }

setInterval(getTime, 1000)
