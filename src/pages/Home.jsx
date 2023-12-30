import { useContext } from "react"
import { Datacontext } from "../App"
import Crypto from "./crypto";
import { Link } from "react-router-dom";
import News from "./News";
import millify from "millify"
function Home() {
  const {Data } = useContext(Datacontext);
  let num = 16
  return (
    <div className="Home dark:bg-gray-800 ">
      <div className="container m-auto px-4">
        <div className="total flex gap-4 justify-center items-center mt-16">
          <p className="text-orange-500 text-sm w-max self-center">Coins : <span className="text-blue-500">{millify(Data.stats?.total)}</span></p>
          <p className="text-orange-500 text-sm w-max">24H :<span className="text-blue-500">{millify(Data.stats?.total24hVolume)}</span></p>
          <p className="text-orange-500 text-sm w-max">Echanges : <span className="text-blue-500">{millify(Data.stats?.totalExchanges)}</span></p>
          <p className="text-orange-500 text-sm w-max">MarketCap : <span className="text-blue-500">{millify(Data.stats?.totalMarketCap)}</span></p>
          <p className="text-orange-500 text-sm w-max">Markets : <span className="text-blue-500">{millify(Data.stats?.totalMarkets)}</span></p>
        </div>

        <div className="coins mt-12 mb-12">
          <div className="title flex items-center justify-between">
              <h1 className="text-xl capitalize dark:text-white">the top 10 coins. </h1>
              <Link  className="text-blue-500 text-lg underline " to="/crypto"> show more </Link>
          </div>
          <Crypto num={num}/>
          

        </div>
        <div className="news  ">
        <div className="title flex items-center justify-between">
              <h1 className="text-xl capitalize dark:text-white  ">the news </h1>
              <Link  className="text-blue-500  underline " to="/news"> show more </Link>
          </div>
          <News num = {4}/>

        </div>
      </div>
    </div>
  )
}

export default Home