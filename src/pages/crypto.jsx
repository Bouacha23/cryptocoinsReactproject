import { useContext} from "react"
import { Datacontext } from "../App"
import millify from "millify";
import { Link } from "react-router-dom";

function Crypto({num}) {
  const {coins ,findCoins ,setFindCoins,setCoins ,Data} =  useContext(Datacontext) ;

  const change = (e)=> {
    setFindCoins(e.target.value) 
    handelcoins(e.target.value)
  }

  const handelcoins = (x) => {
    const find = x == "" ? Data.coins: coins.filter((e)=> (e.name).toLowerCase().includes(x.toLowerCase()))
    setCoins(find)

  }

  if(!Data|| Data.length == 0 ) {
    return( 
      <p className="text-red-500 dark:bg-gray-800 h-[500px] text-3xl text-center w-full pt-[300px]"> 
      Error of finding coins</p>
    )
  }
  return (
    <div className="crypto dark:bg-gray-800 ">
      <div className="container m-auto">
      <div className={num > 16 ? "find flex justify-center ":" hidden find flex justify-center "}>
            <input type="text"
              value={findCoins} onChange={ change}
              placeholder="Coins serche" 
              className=" text-center sm:w-[400px] min-w-[200px] h-[40px] outline-none border-gray-300 border-2 rounded-lg px-4 focus:border-blue-400 my-12  " />
          </div>
        <div className=" grid grid-cols-2  md:grid-cols-5 sm:grid-cols-3 md:grid-cols-6 gap-4">
            { coins.filter((el , i) => i <= num ).map(( coin , index )=>
                <Link to={`/${index}`} key={index}>
                <div className="coin_container dark:border-[1px] dark:border-gray-200 dark:shadow-blue-50 dark:shadow-sm shadow-lg p-4 rounded-md hover:bg-gray-100 " key={index}>
                <div className="coin-img flex items-center justify-around    "> 
                  <img className="w-[50px] h-[50px]" src={coin.iconUrl} alt="" />
                  <p className="text-lg text-blue-500 font-bold ">{coin.name.length < 8 ? `${coin.name}`:`${(coin.name).substring(0, 9)}..`}</p>
                </div>
                <div className="coin-text flex flex-cols gap-4 justify-around mt-2  ">
                  <p>price: <span className="text-orange-500">{millify(coin.price)}</span> </p>
                  <p>rank: <span className="text-orange-500"> {millify(coin.rank)}</span></p>
                </div>
              </div>
              </Link>
            )}
        </div>
      </div>
    </div>
  )
}

export default Crypto