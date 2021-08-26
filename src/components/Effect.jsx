import React, { useEffect } from "react";

export const Effect = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log("moviendo");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="effect">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};
