
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [img,setimg] = useState("")
  const [loading,setloading] = useState(false)
  const [qrcode,setqrcode] = useState("arfath")
  const [qrsize,setsize] = useState("150")

 async function generateqr(){
  setloading(true);
  try{
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${qrcode}`
    setimg(url)
  }catch(error){
    console.log("error is message",error)
  }
  finally{
    setloading(false)
  }

  }
  function downloadqr(){
    fetch(img).then((response)=> response.blob()).then(
      (blob)=>{
        const link = document.createElement("a")
        link.href = URL.createObjectURL(blob)
        link.download = "qrcode.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    )
  }
  
  return (
   <>
   <div className="container">
    <h1>QR CODE GENERATOR</h1>
   {img && <img src={img} className='img' alt="" />}
   {loading && <p>please wait...</p>}
    <div>
    <label htmlFor="datainput" className='input-data'>
        Data for Qr Code:
    </label>
    <input value={qrcode} onChange={(e)=> setqrcode(e.target.value)} type="text" id='inputdata' placeholder='enter your qr code' />
    <label htmlFor="datainput" className='input-data' >
        Image size (eg.150px):
    </label>
    <input  value={qrsize} onChange={(e)=> setsize(e.target.value)}  type="text" id='inputdata' placeholder='enter your size' />
    </div>
    <div className='button'>
    <button className='generate' onClick={generateqr} >generate Qr Code</button>
    <button className='download' onClick={downloadqr}>download Qr Code</button>

    </div>
 
   </div>
   
   </>
  )
}

export default Navbar