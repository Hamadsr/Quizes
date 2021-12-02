const hamad=[8,1,13,1,4];
sum=0;
rem=0;
// console.log(sum+=hamad); 
for(let i=0 ; i<hamad.length;i++){

  sum+=hamad[i]
  rem = sum%4
}

console.log(sum);
console.log(rem);

////////////////////////Q2////////////////////////////


fetch("https://www.balldontlie.io/api/v1/teams")

  .then(response => response.json())
  .then(data => console.log(data));

