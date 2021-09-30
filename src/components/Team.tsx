import person1 from '../images/person1.png';
import person2 from '../images/person2.png';
import person3 from '../images/person3.png';

const Team = () => {
  return (
    <div className='flex flex-col px-4 lg:flex-row lg:justify-between mt-36 lg:px-20 xl:px-36 lg:items-center'>
      <div className=''>
        <span className='text-xl font-medium text-red-500'>
          Meet the team
        </span>
        <h3 className='mt-5 text-3xl font-medium'>
          We are chilled and a laidback team
        </h3>
        <p className='mt-4 text-gray-400'>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Sint, minus?
        </p>
      </div>
      <div className='flex items-center justify-center mt-16 lg:mt-0'>
        <div className=''>
          <img
            className='rounded-3xl'
            src={person3}
            alt='person 3'
          />
        </div>
        <div className='ml-3 sm:ml-8'>
          <img
            className='rounded-3xl'
            src={person1}
            alt='person 1'
          />
          <img
            className='mt-2 sm:mt-6 rounded-3xl'
            src={person2}
            alt=' person 2'
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
