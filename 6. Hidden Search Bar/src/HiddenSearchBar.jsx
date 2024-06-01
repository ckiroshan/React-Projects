const HiddenSearchBar = () => {
  return (
    <>
      <section onClick={handleClick} className="container" style={{ backgroundColor: bgColor }}>
        {showInput ? (
          <input type="text" placeholder="Just a searchbar!" autoFocus onBlur={() => setShowInput(false)} />
        ) : (
          <div className="icon-text-wrapper">
      <h1>Hey</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default HiddenSearchBar;
