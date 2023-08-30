import React from 'react';

const HomePage = () => {
  const inlineStyles = {
    background: 'rgba(0, 0, 0, 0.7)', // Transparent black background
    color: 'white', // Text color
    padding: '50px', // Padding around content
  };

  return (
    <div style={inlineStyles}>
      <h1>Welcome to DIVE</h1>
      <p>
        DIVE is a powerful and comprehensive command-line interface (CLI) tool designed
        to streamline and simplify the process of blockchain development. Whether you
        are setting up nodes, configuring networks for BTP (Blockchain Transfer Protocol),
        establishing bridges, or deploying and testing smart contracts, DIVE offers an
        all-in-one solution to meet your needs. With support for BTP and the
        Inter-Blockchain Communication (IBC) protocol, DIVE empowers developers to explore
        seamless cross-chain communication and collaboration.
      </p>
    </div>
  );
};

export default HomePage;
