import hero from '../images/heroImage.jpg';

const Home = () => {
  const handleSubmit = () => {
    alert(
      `We'll be reaching out to you shortly!!`
    );
  };
  return (
    <div className='mt-20' id='home'>
      <div className='pl-5 sm:pl-24 lg:w-1/2 lg:pl-48'>
        <span className='text-xl font-medium text-blue-400'>
          unhappy with your website?
        </span>
        <h1 className='mt-5 text-3xl font-medium leading-relaxed sm:text-5xl'>
          We create beautiful and fast web
          services
        </h1>
      </div>
      <div className='mt-5 sm:mt-10'>
        <img
          className='w-full h-48 sm:h-auto rounded-3xl'
          src={hero}
          alt='hero Image'
        />
      </div>
      <div className='pl-5 mt-5 sm:mt-10 sm:pl-24 lg:w-1/2 lg:pl-48'>
        <h1 className='text-3xl font-medium leading-relaxed sm:text-5xl'>
          Story, emotion and purpose
        </h1>
        <p className='mt-5 text-lg text-gray-500'>
          We help transform your ideas into real
          world applications that will outperform
          your toughest competition and help you
          achieve your strategic goals in short
          period of time.
        </p>
        <form
          className='mt-7'
          onSubmit={handleSubmit}
        >
          <label
            className='text-sm text-gray-400'
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
  );
};

export default Home;
