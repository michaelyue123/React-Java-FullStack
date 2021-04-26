import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div>
      <hr />
      <footer className="footer">
        <span className="text-muted">
          All Rights Reserved 2018 @in28minutes
        </span>
      </footer>
    </div>
  );
};

export default Footer;
