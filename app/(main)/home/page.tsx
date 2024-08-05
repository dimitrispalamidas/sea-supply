import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome, [User]!</h1>
      </header>
      <section>
        <div className='tile'>
          <h2>Order Status</h2>
          <p>Current orders, pending approvals, recent deliveries...</p>
        </div>
        <div className='tile'>
          <h2>Notifications</h2>
          <p>Important updates or notifications...</p>
        </div>
        <div className='tile'>
          <h2>Weather Updates</h2>
          <p>Real-time weather conditions...</p>
        </div>
        <div className='tile'>
          <h2>Global News</h2>
          <p>Latest news snippets...</p>
        </div>
        <div className='tile'>
          <h2>Profile Overview</h2>
          <p>Summary of your profile...</p>
        </div>
      </section>
      <footer>
        <nav>
          <ul>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/news'>News</a>
            </li>
            <li>
              <a href='/order'>Order</a>
            </li>
            <li>
              <a href='/certificates'>Certificates</a>
            </li>
            <li>
              <a href='/profile'>Profile</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
