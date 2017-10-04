const modalOverlay = document.getElementById('modal-overlay')
const closeModalBtn = document.getElementById('close-modal-button')
const confirmBtn = document.getElementById('confirm-button')
const bookingModal = document.getElementById('booking-modal')
const bookBtns = document.querySelectorAll("td > button")
const numInput = document.getElementById("days")
const roomNumberInfo = document.getElementById("room-info")
const defaultDate = document.getElementById("date").value = new Date().toISOString().slice(0,10).replace(/-/g,"")
let days = Number(document.getElementById("days").value)
var price

const closeModal = () => {
    modalOverlay.classList.add('hidden')
    bookingModal.classList.add('hidden')
}

const openModal = (roomNumber, price) => {
    console.log((days * Number(price)) )
    roomNumberInfo.innerHTML = `Room ${roomNumber}`
    let totalPriceInfo = document.getElementById("total-price").innerHTML = `$${(Number(price) * days)}`
    modalOverlay.classList.remove('hidden')
    bookingModal.classList.remove('hidden')
}

const getRoomInfo = event => {
    const getPrice = event.target.parentNode.parentNode.children[2].innerHTML.slice(1)
    const roomNumber = event.target.parentNode.parentNode.children[0].innerHTML
    var capacity = event.target.parentNode.parentNode.children[1].innerHTML
    price = Number(getPrice)
    openModal(roomNumber, price)
    return price
}

const bookRoom = (event) => {
    let days = Number(numInput.value)
    getRoomInfo(event)
    openModal()
}


const updateDays = (event, days) => {
    days = Number(document.getElementById("days").value)
    document.getElementById("total-price").innerHTML = `$${(price * days).toFixed(2)}`
}



closeModalBtn.addEventListener("click", closeModal)
bookBtns.forEach( button => {
    button.addEventListener("click", getRoomInfo, openModal)
})

numInput.addEventListener("click", updateDays)
