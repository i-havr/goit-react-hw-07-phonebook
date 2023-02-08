import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="64"
    width="64"
    radius="9"
    color="#729599"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      justifyContent: 'center',
    }}
    wrapperClassName=""
    visible={true}
  />
);
