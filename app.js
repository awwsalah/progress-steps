
const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')
let title = document.getElementById('title')
let currentActive = 1;
const titles = ["Step 1", "Step 2", "Step 3", "Step 4"]; // Define titles for each step

next.addEventListener('click', () =>{
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    console.log(currentActive)
    update()
})

prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){
    title.textContent = titles[currentActive - 1]; // Update title text
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    } else{
        next.disabled = false
        prev.disabled = false
    }
}

