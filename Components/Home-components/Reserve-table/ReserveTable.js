import React from "react";
import Link from "next/link";
import Image from "next/image";
const ReservTable = () => {
  return (
    <div className="ReserveTable bg1">
        <div className="container">
            <div className="RserveHeader text-center bg2">
                <div className="RserveHeader1">Reserve Your Table</div>
                <div className="RserveHeader2">Book a table in advance to enjoy your time with friends & Family</div>
            </div>
            <div className="ReserveFormBox">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-control-1">
                            <input type="text" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-control-1">
                            <input type="text" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-control-1">
                            <input type="text" placeholder="Phone"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control-1">
                            <select>
                                <option>Select Pax</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control-1">
                            <input type="date" placeholder="Select Date"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-control-1">
                            <input type="time" placeholder="Select Date"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default ReservTable;
