document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const raidziuSkaicius = document.querySelector('#raide').value;
    for (i=0; i < raidziuSkaicius; i++)
    {
      const newElement = document.createElement('p');
      document.body.appendChild(newElement);
      newElement.innerText = "L";
      
      // for (j=0; j <= i; j++)
      // {
      //   newElement.innerText += "p" ;
      // }
    }


    const getLastP = document.querySelector('p:nth-last-of-type(1)');
    getLastP.innerText = "L".repeat(raidziuSkaicius);
      console.log(getLastP);
      const getFirstP = document.querySelector('p:first-of-type');
      getFirstP.innerText = "L".repeat(raidziuSkaicius);
        console.log(getFirstP);
    
})
