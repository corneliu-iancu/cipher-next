import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={`row ${style.footer}`.trim()}>
      {/* <div className={style.footer}> */}
        <div className='col-4'>a</div>
        <div className='col-4'>b</div>
        <div className='col-4'>c</div>
      {/* </div> */}
    </div>
  );
};

export default Footer;