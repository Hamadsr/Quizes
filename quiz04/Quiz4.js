/*==================================Quiz 04: Asynchronous and react components========================== */
/* 1- write a fetch get request to https://kitsu.io/api/edge/anime?filter[text]=flcl 
and print the slug and synopsis keys of index 1 in the returned data array using promises */

/* write your code here */

fetch("https://kitsu.io/api/edge/anime?filter[text]=flcl")
.then((res)=> res.json())
.then((data)=>
 console.log(data.data[1].attributes.slug, data.data[1].attributes.synopsis)
 
 )


/* 2- using the starter code for react application provided to you, do the following:
        a) Add five components namely: Main, Nav, Footer, Button, and Header
        b) App component contains Header, Main, Footer components only, and passes a string prop to the Header component 
        c) Header component contains an h1 text that is the text prop sent from the App component, and the Nav component
        d) Nav component contains four h3 texts spaced evenly as a grid
        e) the Main component contains the Button component and will send a string as a prop to the Button component.
        f) The Button component contains a button with the text inside it being the prop passed from the Main component. 
           and has #79c99e as a background color
        g) the footer component is class component that has the h1 text : this is the header!!      
        h) add some extra CSS styling to distinguish between each component.
        i) the usage of inline and internal styling is prohibited and will result in marks deduction*/
        




