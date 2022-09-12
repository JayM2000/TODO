import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation as ll } from 'react-router-dom';



function App() {
  const locc = ll();
  const navi = useNavigate();

  const [checked, setChecked] = useState(false);
  const [checkedd, setCheckedd] = useState(false);
  // const [status, setPass1] = useState('');
  const [desc, setPass2] = useState('');

  function navigateHome() {
    // alert('are you sure to leave !!');
    navi('/dash', { state: { id: locc.state.id } });
  };

  function registrys(e) {
    e.preventDefault();

    const completed = checked;
    const status = checkedd;
    const token = locc.state.id;

    fetch('http://localhost:5000/dashh', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        completed, status, desc
      })
    })
      .then(res => res.json())
      .then((dt) => {
        if (dt.st !== "ok") {
          throw `${dt.st}`;
        }
        alert(`${dt.st} ,add another??? `);
      })
      .catch((err) => {
        alert(err);
        console.log(err)
      });
  };

  return (

    <div className="App">
      <form onSubmit={registrys}>
        <br /><u>Completed or Not :- </u>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        /><br />

        <br /><u>Staus of Pending or Not :- </u>
        <input
          type="checkbox"
          checked={checkedd}
          onChange={(e) => setCheckedd(e.target.checked)}
        /><br /><br />

        {/* <input value={status} onChange={(e) => { setPass1(e.target.value) }} type="text" placeholder='Enter status....' /><br /> */}
        <input value={desc} onChange={(e) => { setPass2(e.target.value) }} type="text" placeholder='Enter Description ....' /><br /><br />
        <button><u>Submit...</u></button>
      </form>
      <br/>
      <button onClick={navigateHome}>Back to DashBoard</button>
    </div>
  );
}

export default App;
