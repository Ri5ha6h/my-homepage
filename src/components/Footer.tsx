import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  const handleSubmit = () => {
    alert(
      `We'll be reaching out to you shortly!!`
    );
  };
  return (
    <div className='px-6 pt-8 pb-5 bg-gray-900 md:px-10 mt-36 2xl:px-36 xl:px-24'>
      <div className='flex flex-col justify-between space-y-10 lg:flex-row lg:space-y-0'>
        {/* menu */}
        <ul className='space-y-5 text-xl font-medium text-white'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#service'>Services</a>
          </li>
          <li>
            <a href='#work'>Our Works</a>
          </li>
          <li>
            <a href='#client'>Clients</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        {/* social handles */}
        <div>
          <h2 className='text-3xl font-extrabold tracking-wide text-white'>
            Rishabh
          </h2>
          <div className='flex items-center mt-5 space-x-3'>
            <a href='#'>
              <FaInstagramSquare className='w-8 h-8 text-white'></FaInstagramSquare>
            </a>
            <a href='#'>
              <FaLinkedin className='w-8 h-8 text-white'></FaLinkedin>
            </a>
            <a href='#'>
              <FaTwitterSquare className='w-8 h-8 text-white'></FaTwitterSquare>
            </a>
          </div>
        </div>
        {/* contact us */}
        <div>
          <form
            className='mt-7'
            id='contact'
            onSubmit={handleSubmit}
          >
            <label
              className='text-sm text-white'
              htmlFor='contact'
            >
              Want us to contact you?
            </label>
            <div className='relative'>
              <input
                className='w-64 py-5 pl-3 mt-2 bg-gray-100 border-2 outline-none rounded-xl sm:w-96'
                type='email'
                name='email'
                autoComplete='email'
                id='contact'
                placeholder='Email'
              />
              <button
                type='submit'
                className='absolute px-6 py-3 text-lg font-medium text-white bg-blue-400 border-2 rounded-xl top-3 left-40 sm:left-72'
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='mt-24 text-center'>
        <p className='text-gray-400'>
          created by{' '}
          <a
            className='border-b-2'
            href='https://devchallenges.io/portfolio/Ri5ha6h'
            target='_blank'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default Footer;
