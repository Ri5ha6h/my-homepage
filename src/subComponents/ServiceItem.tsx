import { FC } from 'react';
import { IconType } from 'react-icons/lib';

interface ServiceItemProps {
  Icon?: IconType;
  title: string;
  iconClass?: string;
  btnClass?: string;
  itemClass?: string;
}

const ServiceItem: FC<ServiceItemProps> = ({
  Icon,
  title,
  iconClass,
  btnClass,
  itemClass,
}) => {
  return (
    <div
      className={
        'w-80 sm:w-96 p-8 mt-10 lg:mt-0 cursor-pointer hover:shadow-xl rounded-xl ' +
        itemClass
      }
    >
      <div
        className={
          'flex items-center justify-center w-20 h-20 rounded-xl ' +
          iconClass
        }
      >
        {Icon && (
          <Icon className='w-8 h-8 text-white fill-current' />
        )}
      </div>

      <div className='mt-8'>
        <h3 className='text-2xl font-bold'>
          {title}
        </h3>
        <p className='mt-5 text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Provident nulla
          quisquam magni deleniti! Ab et harum
          natus, officiis perspiciatis molestiae?
        </p>
      </div>
      <div className='mt-6'>
        <button
          className={
            'font-medium py-3 px-3 rounded-xl bg-gray-300 text-gray-500 hover:bg-blue-400 hover:text-white ' +
            btnClass
          }
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceItem;
