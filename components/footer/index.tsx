import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={`row py-4 bg-dark text-light align-items-center ${style.footer}`.trim()}>
      {/* <div className={style.footer}> */}
        <div className='col-4'>
          <p><a className='btn btn-light disabled' aria-disabled href='#'>Whitepaper</a></p>
          <p><a className='btn btn-light disabled' aria-disabled href='#'>Terms and Conditions</a></p>
          <p><a className='btn btn-light disabled' aria-disabled href='#'>Cookie policy</a></p>
        </div>
        <div className='col-4'>
          <p>All rights reserved.</p>
        </div>
        <div className='col-4'>
          <p>RustyTribeClubg@2022</p>
          <p>
            <small>A Blockchain powered organisation.</small>
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;