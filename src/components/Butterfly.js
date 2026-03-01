import './Butterfly.css';
import React from 'react';

const Butterfly = () => {
  return (
    <div className="container">

            <div className="flower">
                <div className="stem"></div>
                <div className="leaf"></div>
                <div className="petal petal-1"></div>
                <div className="petal petal-2"></div>
                <div className="petal petal-3"></div>
                <div className="petal petal-4"></div>
                <div className="petal petal-5"></div>
                <div className="petal petal-6"></div>
                <div className="dot"></div>
            </div>
    <div className="butterfly">
        <div className="wing upper-left-wing"></div>
        <div className="wing upper-right-wing"></div>
        <div className="wing lower-left-wing"></div>
        <div className="wing lower-right-wing"></div>
        <div className="butterfly-body"></div>
        <div className="butterfly-body"></div>
        <div class="antenna-left"></div>
        <div class="antenna-right"></div>
    </div>
</div>
  );
};

export default Butterfly;