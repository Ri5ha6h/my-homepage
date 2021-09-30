import ServiceItem from '../subComponents/ServiceItem';
import {
  RiPencilFill,
  RiCodeFill,
  RiDatabase2Fill,
} from 'react-icons/ri';

const Services = () => {
  return (
    <div className='mt-24' id='services'>
      <div className='pl-4 sm:pl-10 lg:pl-20'>
        <h2 className='text-4xl font-medium tracking-wide'>
          We offer high demand services
        </h2>
      </div>
      <div className='flex flex-col items-center content-around mt-10 lg:justify-around lg:flex-row'>
        <ServiceItem
          Icon={RiPencilFill}
          title='UI/UX Design'
          iconClass='bg-blue-400'
        />
        <ServiceItem
          Icon={RiCodeFill}
          title='Front End'
          iconClass='bg-green-500'
        />
        <ServiceItem
          Icon={RiDatabase2Fill}
          title='Back End'
          iconClass='bg-red-400'
        />
      </div>
    </div>
  );
};

export default Services;
