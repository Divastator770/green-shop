const MyProducts = () => {
  return (
    <div>
      <div className="cards flex flex-col items-center md:flex-row gap-5">
        <div className="card w-[250px] h-[450px] bg-[#F2F2F2] rounded-md">
          <img className="p-3 w-auto h-auto" src="https://images.squarespace-cdn.com/content/v1/5b2db7bdda02bc2739e5aea7/1712276472460-L4KCREEJ449WSQ9HDGBF/DSC_0331.jpg?format=1000w" alt="" />
          <div className="card-body">
            <h1 className="text-[25px] font-bold">Motif</h1>
           <div className="flex items-center gap-5" >
           <p className="text-green-600 font-bold text-xl">900$</p>
           <del className="text-gray-500">1200$</del>
           </div>
          </div>
        </div>
           <div className="card w-[250px] h-[450px] bg-[#F2F2F2] rounded-md">
          <img className="p-3 w-[400px] h-[300px] mx-auto" src="http://res.cloudinary.com/dj28bsagl/image/upload/v1725432154/pdugbztqr9pfrulkl3uq.png" alt="" />
          <div className="card-body">
            <h1 className="text-[25px] font-bold">Motif</h1>
          
           <div className="flex items-center gap-5" >
           <p className="text-green-600 font-bold text-xl">900$</p>
           <del className="text-gray-500">1200$</del>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProducts