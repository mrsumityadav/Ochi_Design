import React from 'react'

function About() {
    return (
        <div data-scroll data-scroll-speed="-0.1" className='bg-[#CDEA68] relative z-[3]'>
            <h1 className='text-[4vw] p-20 leading-[4vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className='border-t border-[#99AD53] px-20 pt-5 pb-20 flex'>
                <h3 className='w-1/2'>What you can expect:</h3>
                <div className='flex justify-between w-2/5'>
                    <div className='w-[20vw] flex flex-col'>
                        <span>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        </span><br />
                        <span>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </span>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <h1>Instagram</h1>
                        <h1>Behance</h1>
                        <h1>Facebook</h1>
                        <h1>Linedin</h1>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#99AD53] px-20 pt-[1vw] pb-[3vw] flex'>
                <div className='w-1/2 flex flex-col gap-[2vw]'>
                    <h3 className='text-[3vw] leading-[3vw]'>Our approach:</h3>
                    <button className='flex text-white items-center gap-[1vw] px-[2vw] py-[0.8vw] w-fit rounded-full bg-[#212121]'>
                        <a href="#">READ MORE</a>
                        <div className='w-[0.5vw] h-[0.5vw] rounded-full bg-white'></div>
                    </button>
                </div>
                <div className='flex justify-between w-1/2 bg-cyan-500 rounded-[0.5vw] overflow-hidden'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='w-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default About
