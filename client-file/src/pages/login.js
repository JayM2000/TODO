import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function App() {
  const navi = useNavigate();

  const [em, setEm] = useState('');
  const [pass, setPass] = useState('');

  const navigateHome = () => {
    navi('/reg');
  };

  function registrys(e) {
    e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: "POSt",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        em, pass
      })
    })
      .then(res => res.json())
      .then((dt) => {

        if (dt.st !== 'ok') {
          throw `${dt.st}`;
        }

        const tk = dt.token;
        // console.log(tk);
        navi('/dash', { state: { id: tk } });
        
      })
      .catch((err) => {
        alert(err);
      });

  };

  return (

    <div className="App">
      <h1>Login Pages</h1>
      <form onSubmit={registrys}>
        <input value={em} onChange={(e) => { setEm(e.target.value) }} type="email" placeholder='Enter Email ....' /><br />
        <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder='Enter Password ....' /><br />

        <button><u>Submit...</u></button>
      </form>
      <button onClick={navigateHome}>Register Page</button>
    </div>
  );
}

export default App;
