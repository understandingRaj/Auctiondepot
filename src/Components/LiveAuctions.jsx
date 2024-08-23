import React, { useEffect, useState } from 'react'
import { live } from './HomeAPI'
import './CSS/liveauctions.css'


const LiveAuctions = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [bidAmounts, setBidAmounts] = useState(() => {
    // Retrieve the saved bid amounts from localStorage (if they exist)
    const savedBids = localStorage.getItem('bidAmounts');
    return savedBids ? JSON.parse(savedBids) : {};
  });

  const [showInput, setShowInput] = useState({});
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const countDownDate = new Date("Jan 5, 2030 18:37:25").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle opening the input box
  const handleBidClick = (id) => {
    setShowInput((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setInputValue('');
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle bid submission
  const handleSubmit = (id) => {
    if (inputValue) {
      const newBidAmounts = {
        ...bidAmounts,
        [id]: inputValue,
      };

      setBidAmounts(newBidAmounts);

      // Save the updated bid amounts to localStorage
      localStorage.setItem('bidAmounts', JSON.stringify(newBidAmounts));
    }

    setShowInput((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };
return (
  <>
    <div className='live-auctions '>
      <h1 className='container'>Live Auctions</h1>
      <ul>


        {live.map((e) => {
          return (
            <li key={e.id}><div className="card" style={{}}>
              <img src={e.imgurl} className="card-img-top" alt="..." style={{}} />
              <div className="card-body">
                <h5 className="card-title">{e.imgcap}</h5>
                <p className="card-text" style={{ float: "left" }}>{e.mrp}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ color: "orange", fontWeight: "600" }} >Auction ID. BB12345</li>
                <li className="list-group-item" style={{ backgroundColor: "#ddd", fontWeight: 650 }}>
                  <div>₹ {bidAmounts[e.id] || 0}</div>
                  <div>{timeLeft.hours}h . {timeLeft.minutes}m . {timeLeft.seconds}s
                  </div>
                  {timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
                    <div id="demo">EXPIRED</div>
                  )}
                </li>

                <button type="button" className="btn btn-danger" style={{ marginBottom: "1rem", borderRadius: "10px" }} onClick={() => handleBidClick(e.id)}>Bid Now</button>
                {showInput[e.id] && (
                  <div className="bid-input-box">
                    <label><b>{e.imgcap}</b></label>
                    <input
                      type="number"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Enter amount"
                      style={{ marginRight: '10px' }}
                    />
                    <button onClick={() => handleSubmit(e.id)}>Submit</button>
                  </div>
                )}
              </ul>

            </div>
            </li>)
        })

        }
      </ul>


    </div>
  </>
)
};

export default LiveAuctions