import './custom-button.styles.scss';

const CustomButton = ({children, btnName, ...otherProps}) => (
  <button className={`${btnName? btnName : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;