const Header = ({ searchTerm }) => {
  return (
    <div className="header">
      <h1>Meteorite Landings</h1>
      <p>viewing meteorites from {searchTerm}</p>
    </div>
  );
};

export default Header;
