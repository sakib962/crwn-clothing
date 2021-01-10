import './custom-button.styles.scss';

const CustomButton = ({children, btnName, inverted, ...otherProps}) => (
  <button 
    className={
      `custom-button ${btnName? btnName : ''} ${inverted ? 'inverted' : ''}`
    } 
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;