import CldImageWrapper from '../CldImageWrapper';
import UploadWidget from './UploadWidget';
import Script from 'next/script';

interface UploadImageProps {
  imageId: string;
  setImageId: React.Dispatch<React.SetStateAction<string>>;
}

export default function UploadImage({ imageId, setImageId }: UploadImageProps) {
  const uploadImageHandler = (info: { public_id: string }) => {
    console.log('info', info);
    setImageId(info.public_id);
  };

  return (
    <div>
      <Script src='https://widget.cloudinary.com/v2.0/global/all.js' />
      {imageId ? (
        <CldImageWrapper
          className='h-80 rounded-md object-cover object-top ring-1 ring-inset p-[.06rem] ring-gray-300'
          width='500'
          height='500'
          src={imageId}
          alt='My Image'
        />
      ) : (
        <UploadWidget
          uploadImageHandler={(info: { public_id: string }) =>
            uploadImageHandler(info)
          }
        />
      )}
    </div>
  );
}
