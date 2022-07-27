let currentRating = null

// const ratings = document.querySelectorAll(".circle .rating")
const ratings = [...document.getElementsByClassName("circle rating")]
const submitBtn = document.getElementById("cta-primary")
const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const displayRating = document.getElementById("display-rating")

ratings.forEach((rate) => {
  
  rate.addEventListener('click',event => {
    //store the selected rating
    currentRating = +event.target.innerText
    console.log(currentRating)
    //change the colour of the selected rating
    if (currentRating) { //remove from all the elements
      ratings.forEach(r => r.classList.remove("selected")) 
    }
    event.target.classList.add("selected") //add it to this particular target, ie; the one that has been clicked
  })
})

submitBtn.addEventListener('click', () => {
  if(!currentRating){
    alert('Select a rating first')
    return
  }
  card1.style.display = "none";
  card2.style.display = "flex";
  displayRating.innerHTML = "You selected " + currentRating + " out of 5.";
})