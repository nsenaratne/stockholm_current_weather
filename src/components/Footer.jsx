import styles from '../style';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <div>
      <section
        className={`${styles.flexCenter} ${styles.paddingY} mx-10 flex-col`}
      >
        <div>
          <div className='flex-[1] flex flex-col justify-center mr-10'>
            <img
              src={logo}
              alt='Weather Stockholm'
              className='w-[266px] h-[72.14px] object-contain'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
