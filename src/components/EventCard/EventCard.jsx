import event1 from '../../assets/images/event1.png'

const EventCard = () => {
  return (
    <div className='min-h-[364px] max-w-[364px] inline-flex flex-col relative shadow-xl rounded-lg'>
        <img src={event1} className="max-w-[364px] object-cover w-full rounded-t-lg h-[178px]" alt="" />
        <div className='absolute top-4 left-4 bg-white rounded-[20px]  px-3 py-1 text-sm font-medium'>Free</div>
        <div className='px-5 py-4 bg-white'>
            <div className='flex items-center gap-5'>
                <span className='text-sm font-semibold text-primary-green-50'>Nov</span>
                <span className='text-primary-dark-50 font-medium'>The confluence</span>
            </div>
            <div className='flex items-center gap-5 mt-3'>
                <span className='text-sm font-semibold text-primary-green-50'>23rd</span>
                <span className='text-primary-dark-50 max-w-[280px]'>Lorem ipsum dolor sit amet, ipsum adipiscing elit.  </span>
            </div>
            <div className='text-center mt-5'>

            <button className="bg-[#157145] px-5 py-2 text-white rounded-[30px] font-semibold hover:bg-[#157145]/80">Register</button>
            </div>
        </div>
    </div>
  )
}

export default EventCard