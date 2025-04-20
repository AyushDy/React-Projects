import { timer } from "../../../assets/data/data";


const Timer = () => {
  
    return (
      <div className="flex items-end mx-20 ">
        {timer.map((ele) => (
          <div key={ele.format} className="flex items-end">
            <div>
              <p className="text-sm">{ele.format}</p>
              <h1 className="text-3xl font-bold">{ele.time}</h1>
            </div>
            {ele.format !== "Seconds" && (
              <span className="mx-5 py-1 text-2xl font-bold text-red-500">:</span>
            )}
          </div>
        ))}
      </div>
    );
  };

  export default Timer