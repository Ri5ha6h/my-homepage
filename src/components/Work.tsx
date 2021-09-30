import smartHome from '../images/smarthome.jpg';
import onBoard from '../images/onboard.png';
import booking from '../images/booking.png';
import juice from '../images/juice-product.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import WorkItem from '../subComponents/WorkItem';

const Work = () => {
  return (
    <div className='mt-24' id='work'>
      <div className='pl-4 sm:pl-10 lg:pl-20'>
        <h2 className='text-4xl font-medium tracking-wide'>
          Good design means good business
        </h2>
      </div>
      <div className='flex flex-col mt-14'>
        {/* first two work product */}
        <div className='flex flex-col justify-around md:flex-row'>
          {/* first product */}
          <div className='flex justify-center flex-1 mt-14 md:mt-40 md:justify-end'>
            <WorkItem
              image={smartHome}
              alt='smart home'
              app='Full stack application'
              title='Smart home dashboard'
            />
          </div>
          {/* second product */}
          <div className='flex justify-center flex-1 mt-10 md:justify-start md:mt-0 md:ml-12'>
            <WorkItem
              image={onBoard}
              alt='on board'
              app='UI/UX design'
              title='Onboard application'
            />
          </div>
        </div>

        {/* remaining two work products */}
        <div className='flex flex-col justify-around md:flex-row'>
          {/* third product */}
          <div className='flex justify-center flex-1 mt-14 md:mt-40 md:justify-end'>
            <WorkItem
              image={booking}
              alt='booking'
              app='Mobile application'
              title='Booking application'
            />
          </div>
          {/* fourth product */}
          <div className='flex justify-center flex-1 mt-10 md:justify-start md:mt-0 md:ml-12'>
            <WorkItem
              image={juice}
              alt='juice'
              app='Front End application'
              title='Juice product homepage'
            />
          </div>
        </div>
      </div>
      {/* more */}
      <div className='flex justify-start mt-10 md:justify-end 2xl:px-80'>
        <a
          className='text-xl font-bold text-blue-400 md:text-2xl hover:underline'
          href='#'
        >
          see more{' '}
          <FaLongArrowAltRight className='inline-block fill-current'></FaLongArrowAltRight>
        </a>
      </div>
    </div>
  );
};

export default Work;
