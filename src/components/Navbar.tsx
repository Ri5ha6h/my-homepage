import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Fragment, useState } from 'react';
import {
  Dialog,
  Transition,
} from '@headlessui/react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='flex items-center justify-between '>
        <ul>
          <li className='text-3xl font-extrabold font-heebo'>
            <h2>Rishabh</h2>
          </li>
        </ul>
        <ul className='hidden text-2xl font-medium md:space-x-7 lg:space-x-14 xl:space-x-20 md:flex'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#work'>Our Work</a>
          </li>
          <li>
            <a href='#client'>Clients</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <ul className='block md:hidden '>
          <li>
            <HiMenu
              className='cursor-pointer w-9 h-9'
              onClick={() => setShow(true)}
            ></HiMenu>
          </li>
        </ul>
      </div>
      {/* menu functionality */}
      <Transition show={show} as={Fragment}>
        <Dialog open={show} onClose={setShow}>
          {/* Background overlay */}
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-50'
            entered='opacity-50'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-50'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 z-20 bg-black'></Dialog.Overlay>
          </Transition.Child>

          {/* Sliding sidebar */}
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='fixed top-0 bottom-0 right-0 z-30 w-2/3 px-6 pt-10 bg-white'>
              <div className='relative flex justify-end'>
                <CgClose
                  className='absolute cursor-pointer w-9 h-9'
                  onClick={() => setShow(false)}
                ></CgClose>
              </div>
              <div className='flex justify-center pt-24'>
                <ul className='flex flex-col items-center justify-center text-xl font-medium space-y-14'>
                  <li>
                    <a
                      href='#home'
                      onClick={() =>
                        setShow(false)
                      }
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#services'
                      onClick={() =>
                        setShow(false)
                      }
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='#work'
                      onClick={() =>
                        setShow(false)
                      }
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href='#client'
                      onClick={() =>
                        setShow(false)
                      }
                    >
                      Clients
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      onClick={() =>
                        setShow(false)
                      }
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;
