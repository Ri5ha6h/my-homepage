import { FC } from 'react';

interface WorkItemProps {
  image: string;
  title: string;
  app: string;
  alt: string;
}

const WorkItem: FC<WorkItemProps> = ({
  image,
  title,
  app,
  alt,
}) => {
  return (
    <div>
      <img
        className='rounded-3xl'
        src={image}
        alt={alt}
      />
      <div className='mt-5'>
        <span className='text-sm font-light text-gray-400'>
          {app}
        </span>
        <h3 className='mt-3 text-2xl font-medium'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default WorkItem;
