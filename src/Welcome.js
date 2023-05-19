function Welcome(props) {
  return (
    <>
      <div className="welcome-container">
        <h2 className="welcome-heading">Welcome to TodoPro!</h2>

        <p className="welcome-info">
          We're excited to have you on board and help you streamline your tasks
          and boost your productivity. With our user-friendly and intuitive
          interface, managing your to-do lists has never been easier.
        </p>

        <button className="get-started" onClick={props.welcome}>
          Get Started
        </button>
      </div>
    </>
  );
}

export default Welcome;
