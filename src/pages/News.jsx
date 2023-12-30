import { useContext } from "react"
import { Datacontext } from "../App"
import img from "../assets/OIP.jpeg"

function News({num}) {

  const {news } = useContext(Datacontext)

  if(news.length == 0) {
    return  <div className="News dark:bg-gray-800  flex items-center justify-center">
              <p className="text-3xl my-8 uppercase text-red-500 text-center"> non news today </p>
            </div>
  }
  return (

    <div className="News pb-12 dark:bg-gray-800 ">
        <div className="contianer m-auto grid grid-cols-1   sm:grid-cols-2 md:grid-cols-1 gap-4 ">
          {
            news.filter((e,i)=> i < num  ).map((el ,i) => (
                <div className="news-container shadow-xl rounded-sm  flex flex-col items-center md:flex-row " key={i}>
                  <img  className="w-full h-[300px] rounded-sm  md:h-full md:w-1/3 " src={img} alt="" />
                  <div className="news-text py-8 text-center sm:p-8">
                    <h1 className="font-bold text-2xl text-blue-500  ">{el.title}</h1>
                    <p className="my-4 ">{el.description }</p>
                    <a className="text-orange-500 my-4 text-xl underline " href={el.url}>read more </a>
                  </div>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default News