import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
    const navi = useNavigate();

  const [name, setName] = useState('');
  const [em, setEm] = useState('');
  const [pass, setPass] = useState('');

  const navigateHome = () => {

    navi('/');
  };

  async function registrys(e) {
    e.preventDefault();

    fetch('http://localhost:5000/reg', {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, em, pass
      })
    })
      .then(res => res.json())
      .then((dt) => {
        alert(`there some mess ->> ${dt.st}`);
        // console.log(dt.st);
        const tk = dt.tokens;
        alert(tk);
        navi('/dash',{state:{id:tk}});
      })
      .catch((err) => { console.log(err + " ?? exists...") });

  };

  return (

    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registrys}>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter Name ....' /><br />
        <input value={em} onChange={(e) => { setEm(e.target.value) }} type="email" placeholder='Enter Email ....' /><br />
        <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder='Enter Password ....' /><br />
        {/* <input type="submit" /> */}
        <button><u>Submit...</u></button>
      </form>
      <button onClick={navigateHome}><u>Login Page</u></button>
    </div>
  );
}

export default App;
