// grabbing all the necessary stuffs
const fakas = document.querySelectorAll(".faka")
const output = document.getElementById('output')
const cpBtn = document.getElementById('cpBtn')
const id = document.getElementById('id')
const videoLink = document.getElementById('videoLink')
const title = document.getElementById('title')
const movieDate = document.getElementById('movieDate')
const movieMonth = document.getElementById('movieMonth')
const movieYear = document.getElementById('movieYear')
const movieType = document.getElementById('movieType')
const movieBtn = document.getElementById('movieBtn')
const tvBtn = document.getElementById('tvBtn')
const movieQuality = document.getElementById('movieQuality')
const movieBackdrop = document.getElementById('movieBackdrop')





// generate function ...
const generate = () => {
	output.innerHTML = 
	`<span class="key" >"id"</span>: ${id.value},<br>
	<span class="key" >"link"</span>: <span class="value" >"${videoLink.value}"</span>,<br>
	<span class="key" >"title"</span>: <span class="value" >"${title.value}"</span>,<br>
	<span class="key" >"published"</span>: <span class="value" >"${movieBackdrop.value}"</span>,<br>
	<span class="key" >"games"</span>: <span class="value" >[]</span>
	
	`
}




// reset function ...
const reset = () => {
  id.value = ""
  videoLink.value = ""
  title.value = ""
  movieBackdrop.value = ""
  output.innerHTML = 
  `<span class="key" >"id"</span>: ,<br>
  <span class="key" >"link"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"title"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"published"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"games"</span>: <span class="value" >[]</span>
  `
  
}

// copy function

const copyBitch = () => {
	navigator.clipboard.writeText(output.innerText)
	alert(`${output.innerText}`)
}
cpBtn.onclick = () => copyBitch()