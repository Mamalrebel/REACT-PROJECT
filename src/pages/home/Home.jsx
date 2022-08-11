import React , {useState , useEffect , useCallback} from 'react'
import Cart from '../../components/cart/Cart';
import Navbar from '../../components/navbar/Navbar';
import { useSelector } from 'react-redux';



import "./home.scss";
import Carts from '../../components/carts/Carts';

const Home = props => {

const mydate = [
 {num:0 , id:"000"},
 {num:1 , id:"001"},
 {num:2 , id:"002"},
 {num:3 , id:"003"},
 {num:4 , id:"004"},
 {num:5 , id:"005"},
 {num:6 , id:"006"},
 {num:7 , id:"007"},
 {num:8 , id:"008"},
 {num:9 , id:"009"},
]
  // const [cartValue, setcartValue] = useState([]);
  // const loadData = useCallback( () => {
  //   fetch("https://api.jsonbin.io/v3/b/62b2f1d4449a1f382115026d")
  //   .then(res => {
  //     return res.json();
  //   }).then(data => {
  //     setcartValue(data.record);
  //   }) 
  // } , [])

  // useEffect(() => {
  //   loadData();
  // } , [loadData])
 

  return (
    <div className="home">
      <Navbar />
      <div className="Carts">
        <Carts item={mydate}/>
      </div>
    </div>
  )
}

export default Home;