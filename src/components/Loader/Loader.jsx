import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <ProgressBar
        height="350"
        width="350"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#2a2a2a"
        barColor="#51E5FF"
      />
    </div>
  );
};
export default Loader;
