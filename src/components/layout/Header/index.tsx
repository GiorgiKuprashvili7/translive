type propsType = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: propsType) => {
  return <h1 onClick={onMenuClick}>header</h1>;
};

export default Header;
