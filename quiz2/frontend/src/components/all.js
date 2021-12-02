import {useState, useEffect} from "react";



const Nav=()=>{

    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch("/");
        const data = await response.json();
        
        
  
        console.log(data);
        setData(info.userInfo);
      })();
    }, []);
    return(
        <div>

            


        </div>
    )
}