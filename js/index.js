const main = document.querySelector('main')

for (let i = 0; i < 5; i++) {
    // looping 6 times (h1->h6)
    // displaying the h[i+1] each loop
    main.innerHTML += `<h${i+1}>My First Javascript</h${i+1}>`
    // or 
    // main.innerHTML += "<h" + (i+1) + ">My First Javascript</h" + (i+1) + ">"
}