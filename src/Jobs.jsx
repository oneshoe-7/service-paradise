import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Submit"); 
  };

  return (
    <form className="self" onSubmit={handleSubmit}>
      <ul>
        <li>
          <p className="text">Your Name:</p>
          <input type="text" placeholder="Enter your name" required />
        </li>
        <li>
          <p className="text">Your Email (if applicable):</p>
          <input type="text" placeholder="Enter your Email" />
        </li>
        <li>
         <p className="text">Your Gender</p>
            <select required className="opt">
          <option value="">Select gender</option>
          <option value="female">Female</option>
         <option value="male">Male</option>
          <option value="other">Other</option>
       </select>
        </li>
        <li>
          <p className="text">Enter your contact:</p>
          <input type="text" placeholder="Enter your contact" required />
        </li>
        <li>
           <p className="text">Enter job type (full/part-time):</p>
  <select required className="opt">
    <option value="">Select job type</option>
    <option value="full-time">Full-time</option>
    <option value="part-time">Part-time</option>
  </select>
        </li>
      </ul>
      <button type="submit" className="formbtn">Submit</button>
    </form>
  );
}

export default Jobs;