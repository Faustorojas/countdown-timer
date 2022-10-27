
const Input = document.getElementById('text')
const btn = document.getElementById('btn')
let newYears = '5 december 2022'
const dayDiv = document.getElementById('day')
const hoursDiv = document.getElementById('hours')
const minuteDiv = document.getElementById('minute')
const secondsDiv = document.getElementById('seconds')



Input.addEventListener('keydown', (e) => {
   if(e.key === 'Enter' ){
      newYears = Input.value
      Input.innerText = Input.value = ""
     
   }
})

btn.onclick = () => {
   newYears = Input.value
   Input.innerText = Input.value = ""
}



  setInterval(
  countdown = () => {
   const newYearsDate = new Date(newYears)
   const currentDate = new Date()
   const totalSeconds = (newYearsDate - currentDate) / 1000
   const minute = Math.floor(totalSeconds / 60) % 60
   const hour = Math.floor(totalSeconds / 3600) % 24
   const day = Math.floor(totalSeconds / 3600 / 24)
   const seconds = Math.floor(totalSeconds % 60)

   dayDiv.innerText = day
   hoursDiv.innerText = formatTime(hour)
   minuteDiv.innerText = formatTime(minute)
   secondsDiv.innerText = formatTime(seconds)
}, 1000
  )
 

let formatTime = (time) => {
   return time <10 ? `0${time}` : time
}