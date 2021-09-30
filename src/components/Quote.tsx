import person4 from '../images/person4.png';

const Quote = () => {
  return (
    <div
      className='flex flex-col px-4 mt-32 lg:px-20 xl:px-36'
      id='client'
    >
      <div>
        <p className='text-4xl font-medium'>
          “Fast and outstanding resutls. Rishabh
          understands their customer’s needs. They
          have a young and talented team.”
        </p>
      </div>
      <div className='flex mt-16'>
        <div>
          <img
            className='sm:w-32 sm:h-32 rounded-3xl'
            src={person4}
            alt='person 4'
          />
        </div>
        <div className='flex flex-col ml-3 xs:p-4 xs:ml-4'>
          <h3 className='text-xl font-medium xxs:text-3xl'>
            Carlos Tran
          </h3>
          <span className='mt-1 font-medium text-gray-400 xs:mt-4 xxs:text-xl'>
            The Decorate Gatsby
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
