import React, { useEffect, useState } from 'react';

const App = () =>{

  const [state,setState] = useState([]);
  useEffect(()=>{
    (async () =>{

      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      console.log(data.data);
      if(data.data){
        setState(data.data);
      }
    })();
  })
return <div>
  {state?.map(item => <div>
  <img  src={item.avatar} />
  <h1>{item.first_name} {item.last_name}</h1>
  <p>{item.email}</p>
  
</div>)}
</div>
};

export default App;