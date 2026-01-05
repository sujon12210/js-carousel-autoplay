let index = 1;
const img = document.getElementById('img');

setInterval(()=>{
  index++;
  img.src = `https://picsum.photos/400/250?${index}`;
}, 3000);
