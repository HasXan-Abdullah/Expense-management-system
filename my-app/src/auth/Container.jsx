/* eslint-disable react/prop-types */
 
const Container = ({content}) => {
  return (
    <div className=" justify-center flex">
    <div className="w-[400px] rounded-lg p-2 mt-[10%]  shadow-lg bg-white-200">
        {content}
        </div>
        </div>
  )
}

export default Container