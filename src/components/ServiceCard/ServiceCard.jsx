


const Plantation = ({item}) => {
  return (
    <div className='relative'>
        <img src={item.img} alt="" className=' z-[2] rounded-b-lg' />
        <div className='h-[50px] sm:h-[93px] max-w-[363px] w-full left-0 z-10  absolute bottom-0 bg-primary-green-100 rounded-b-[20px] flex items-center pl-3 sm:pl-5'>
            <h2 className='sm:text-xl text-primary-yellow font-anglecia'>{item.title}</h2>
        </div>
    </div>
  )
}

export default Plantation