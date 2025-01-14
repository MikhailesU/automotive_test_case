import { Suspense, useEffect, useState } from 'react';
import { Await, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [state, setState] = useState({"ЦПУ":"-", "ОЗУ":"-", "ПЗУ":"-"})
  const req:Function = async() => await fetch('http://127.0.0.1:5000/start_recording', { method: "GET" }).
  then( response=>response.json()).then(response=>{
    if (response.error) throw new Error('something bad happened');
    setState(response)
    return(req())
  })
  useEffect(()=>{
    req()
  },[])
  return (
    <>
      <div className='main_container'>
          <ul>
              <li>{`ЦПУ ${state["ЦПУ"]}`}</li>
              <li>{`ОЗУ ${state["ОЗУ"]}`}</li>
              <li>{`ПЗУ ${state["ПЗУ"]}`}</li>
          </ul>
          <Outlet />
      </div>
    </>
  )
}
