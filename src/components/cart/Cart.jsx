import React , {useState , useEffect ,useCallback} from 'react';

import { useSelector , useDispatch} from 'react-redux';
import { update, remove } from "../../store/userSlice";

import "./cart.scss";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Cart = props => {

  const [name, setName] = useState("");
  const user = useSelector((state) => state.user.cartinfo);
  const deletecart = useSelector((state) => state.user.deletecart);
  const dispatch = useDispatch();
const handleClickupdate = (e) => {
  e.preventDefault();
  dispatch(update({name})); 
};

const handleClickdelete = (e) => {
  e.preventDefault();
  dispatch(remove()); 
};

  return (
    <div>
      {deletecart &&  
      <div className="cart">
        <img src={user[props.id].image} alt="" className="img" />
      <div>
        <h1 className="title">{user[props.id].name}</h1>
      </div>
      <div className="edit">
        <input type="text" className="editinput" placeholder="edit" onChange={(e) => setName(e.target.value)}/>
        <button className="editbtn" onClick={handleClickupdate}><EditIcon className="icon"/></button>
      </div>
        <button className="deletebtn" onClick={handleClickdelete}><DeleteIcon className="icon"/></button>
        {props.children}
      </div>
      }
    </div>  
  )
}

export default Cart