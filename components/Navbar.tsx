import React from 'react';
import Button from '../objects/Button';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col col--sm">Logo</div>
          <div className="col col--sm">
            <div className="row u-justify-content-flex-end">
              <div className="u-margin-right-medium@sm-up">search</div>
              <div className="">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
