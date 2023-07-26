import PropTypes from 'prop-types'
const Cards = ({icon,title,value}) => {
  return (
    <div>
        <div className="flex justify-between rounded-md shadow-md bg-slate-100 w-[300px] m-2 p-3">
           
            <div className="  ">
                <h3 className="text-2xl text-gray-500 ">{title}</h3>
                <p className="    text-black font-semibold text-[20px]">
                    {value}
                </p>
            </div> 
            <div>
              <img alt="icon" src={icon}/>
            </div>
        </div>
    </div>
  )
}
Cards.propTypes = {

icon:PropTypes.string,
title:PropTypes.string,
value:PropTypes.string,
}
export default Cards