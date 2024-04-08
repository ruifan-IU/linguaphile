export const openUploadWidget = (
  options: {
    cloudName: string;
    uploadPreset: string;
    tags: string[];
    maxImageWidth: number;
    sources: string[];
    cropping: boolean;
    croppingAspectRatio: number;
    multiple: boolean;
    clientAllowedFormats: string[];
    maxImageFileSize: number;
  },
  callback: (error: any, result: any) => void,
) => {
  return window.cloudinary.openUploadWidget(options, callback);
};

interface ImageUploadProps {
  uploadImageHandler: (info: { public_id: string }) => void;
}

export default function UploadWidget({ uploadImageHandler }: ImageUploadProps) {
  const uploadImageWidget = (e: MouseEvent) => {
    e.preventDefault();
    const myUploadWidget = openUploadWidget(
      {
        cloudName: 'dqlx6iqqt',
        uploadPreset: 'b5hosxyq',
        tags: ['myname'],
        maxImageWidth: 600,
        sources: ['local', 'url', 'camera'],
        cropping: true,
        croppingAspectRatio: 1,
        multiple: false,
        clientAllowedFormats: ['.jpg', '.jpeg', '.png'],
        maxImageFileSize: 2000000,
      },
      (error: any, result: { event: string; info: { public_id: string } }) => {
        if (!error && result.event === 'success') {
          uploadImageHandler(result.info);
        }
      },
    );
    myUploadWidget.open();
  };

  return (
    <button
      className='flex h-80 w-80 items-center justify-center rounded-md border-gray-300 bg-white px-6 pb-6 pt-5 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600'
      onClick={(e: unknown) => uploadImageWidget(e as MouseEvent)}
    >
      <svg
        className='mx-auto h-12 w-12 text-gray-400'
        stroke='currentColor'
        fill='none'
        viewBox='0 0 48 48'
        aria-hidden='true'
      >
        <path
          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </button>
  );
}
