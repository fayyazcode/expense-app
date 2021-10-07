import './App.css';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [currency, setCurrency] = useState('$');
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState(0);
  const [list, setList] = useState([])
  const [balance , setBalance] = useState(0)

  function add(){
   list.push({
     Item:item,
     Price:price
   })
   if(price>0){
     let i = parseInt(income) + parseInt(price); 
    setIncome(i);
    setBalance(i - parseInt(expense))
   }else{
    let i = parseInt(expense) - parseInt(price); 
    setExpense(i);
    setBalance( parseInt(income) - i )
     
    }
   
  }
  
  return (
    <div className="App">
      <h1 className="heading">Expense Tracker</h1>
      <select defaultValue='$' onChange={(e) => setCurrency(e.target.value)} style={{ width: 200, height: 50 }}>
        <option value='$'>USD</option>
        <option value='€'>EURO</option>
        <option value='฿'>BTC</option>
      </select>
      <h4 className="sub-heading">Your Balance</h4>
     
      <div className="income-expense">
      <h1>{currency}{balance}</h1>
        <div >
          <h1 className="sub-heading">Income</h1>
          <h2 className="sub-heading1">{currency}   {income}</h2>
        </div>
        <div>
          <h1 className="sub-heading">Expense</h1>
          <h2 className="sub-heading1">{currency}    { -1 * parseInt( expense )}</h2>
        </div>
      </div>
      <div className="list-body">
        <h1 className="sub-heading">Transaction History</h1>
        <ul id="transaction-history">
          {list.map((v, i) => (
            <li key={i}> <Button   startIcon={<DeleteIcon />}/>{v.Item}{v.Price}</li>
          ))}
        </ul>
        <hr />
      </div>
      <div className="add-trans">
        <h1 className="sub-heading">Add New Transaction</h1>
        <TextField className="mt-20" id="outlined-basic" label="Item" variant="outlined" onChange={(e) => setItem(e.target.value)} /> <br /> <br />
        <TextField className="mt-20" id="outlined-basic" label="Value" variant="outlined" onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button onClick={()=> add()} className="mt-20">ADD Transaction</button>
    </div>

  );
}

export default App;
