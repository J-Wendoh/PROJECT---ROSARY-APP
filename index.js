const sbtn=document.getElementById("sunday")
const mbtn=document.getElementById("monday")
const tbtn=document.getElementById("tuesday")
const wbtn=document.getElementById("wednesday")
const thbtn=document.getElementById("thursday")
const fbtn=document.getElementById("friday")
const satbtn=document.getElementById("saturday")
const position=document.getElementById("location")
const todbtn=document.getElementById("today")


 
const buttons = document.querySelectorAll('.btn');

// Loop through each button and attach event listeners
buttons.forEach(function(btn) {
  // Add event listener for mouseover event
  btn.addEventListener("mouseover", function() {
    // Increase button width by 10px
    btn.style.width = "315px";
    // Change button color
    btn.style.backgroundColor = "coral";
  });

  // Add event listener for mouseout event
  btn.addEventListener("mouseout", function() {
    // Reset button width to initial
    btn.style.width = "300px";
    // Reset button color to original
    btn.style.backgroundColor = "#7B3F00";
  });
});

addEventListener("DOMContentLoaded", (event) => {


  //SUNDAY
  sbtn.addEventListener("click",grabsun)

  function grabsun(){
  fetch('https://the-rosary-api.vercel.app/v1/sunday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const par = document.createElement('p');
    data.forEach(item => {
      par.textContent = `
        ${<p>In the name: ${item.in_the_name_1}</p>}
        ${<p>I believe: ${item.i_believe}</p>}
        ${<p>Our Father: ${item.our_father_1}</p>}
        ${<p>Hail Mary 1: ${item.hail_mary_1}</p>}
      `;
      position.prepend(par);})
      
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }


//MONDAY
  mbtn.addEventListener("click",grabmon)

  function grabmon(){
  fetch('https://the-rosary-api.vercel.app/v1/monday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }

  //TUESDAY
  tbtn.addEventListener("click",grabtue)

  function grabtue(){
  fetch('https://the-rosary-api.vercel.app/v1/tuesday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }

  //WEDNESDAY
  wbtn.addEventListener("click",grabwed)

  function grabwed(){
  fetch('https://the-rosary-api.vercel.app/v1/wednesday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }

  //THURSDAY
  thbtn.addEventListener("click",grabthur)

  function grabthur(){
  fetch('https://the-rosary-api.vercel.app/v1/thursday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }

  //FRIDAY
  fbtn.addEventListener("click",grabfri)

  function grabfri(){
  fetch('https://the-rosary-api.vercel.app/v1/friday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }


  //SATURDAY
  satbtn.addEventListener("click",grabsat)

  function grabsat(){
  fetch('https://the-rosary-api.vercel.app/v1/saturday')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }


  //TODAY
  todbtn.addEventListener("click",grabtod)

  function grabtod(){
  fetch('https://the-rosary-api.vercel.app/v1/today')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
  console.log(data)
    const jsonData = [data][0]
    const par = document.createElement('p');
    par.textContent = `Let us Start today's prayer, ${jsonData}`;
    position.prepend(par);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching data:', error);
  });
  }


 
          })




















