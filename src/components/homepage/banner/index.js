export default function Banner() {
  return (
    <main>
      <div className="bg-[url('../assets/home_banner.jpg')] h-[844px] w-full object-cover"> 
        <div className='m-auto md:w-[751px] w-[378px] h-[491px]'>
          <h2 className='text-white text-center lg:text-6xl text-4xl font-medium pt-28'>
            Build. Launch. Grow
          </h2>
          <div className='bg-white/25 md:w-[751px] w-[378px] border border-white md:h-80 h-44 opacity-50 mt-14'>
            <div>
              <p className='text-white md:text-4xl text-lg text-center md:px-16 md:py-24 p-8 !bg-inherit'>
              <span className='text-[#8E6DFD]'>ninety3 </span>is a strategic digital product and venture studio giving the worlds most promising companies an edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
  