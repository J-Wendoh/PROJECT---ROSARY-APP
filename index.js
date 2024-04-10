const sbtn=document.getElementById("sunday")
const mbtn=document.getElementById("monday")
const tbtn=document.getElementById("tuesday")
const wbtn=document.getElementById("wednesday")
const thbtn=document.getElementById("thursday")
const fbtn=document.getElementById("friday")
const satbtn=document.getElementById("saturday")
const position=document.getElementById("location")
const todbtn=document.getElementById("today")




addEventListener("DOMContentLoaded", (event) => {

  //SUNDAY
  sbtn.addEventListener("click",grabsun)

  function grabsun(){
  fetch('https://the-rosary-api.vercel.app/v1/sunday')
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




















