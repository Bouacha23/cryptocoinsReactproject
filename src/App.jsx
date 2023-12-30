
import Navbar from './pages/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Footer from './pages/Footer';
import Crypto from './pages/crypto';
import axios from "axios"
import { createContext , useState ,useEffect } from 'react';
export const Datacontext = createContext({});

function App() {

  const [Data , setData] = useState([]);
  const [findCoins , setFindCoins] = useState("")
  const [coins ,setCoins] = useState([])
  const [news ,setNews ] = useState([]) ;
  let num = 100 ;


  // get coins 
  useEffect(()=> {
    const apiconis = async ()=>{
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers: {
          'X-RapidAPI-Key': 'a7886b3105mshd64b5605be6a722p100d63jsn23a1391ae822',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setData(response.data?.data)
        setCoins(response.data?.data?.coins)
      } catch (error) {
        console.error(error);
      }
    }
    apiconis()
  },[])


  
  //get news 

  useEffect(()=>{
  const news = async () => {
  const options = {
    method: 'GET',
    url: 'https://google-web-search1.p.rapidapi.com/',
    params: {
      query: 'crypto',
      limit: '20',
      related_keywords: 'true'
    },
    headers: {
      'X-RapidAPI-Key': 'a7886b3105mshd64b5605be6a722p100d63jsn23a1391ae822',
      'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
    }
  };
    try {
      const response = await axios.request(options);
      setNews(response.data.results)
    } catch (error) {
      console.error(error);
    }
        }
    news()
  },[])

  
  
  return (
    <div className="App dark ">
      <Navbar />
      <Datacontext.Provider value={{Data,findCoins ,setFindCoins ,setData ,coins ,setCoins ,news ,setNews}}>
      <div className="Main">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/news"  element={<News num={20} />}/>
            <Route exact path="/crypto"  element={<Crypto num= {num} />}/>
        </Routes>
      </div>
      </Datacontext.Provider>
      
      <Footer/>
    </div>
  )
}

export default App
