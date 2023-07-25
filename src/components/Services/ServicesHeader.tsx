import { useState, useEffect } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";

interface ServicesHeaderProps {
  pathname: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ pathname }) => {
  const [newPath, setNewPath] = useState<React.ReactNode | null>(null);

  const formatString = (input: string): string[] => {
    const parts = input.split("/");
    const formattedParts = parts.map((part) => part.trim());
    return formattedParts;
  };

  const capitalizeFirstLetter = (str: string): string => {
    const words = str.split(" ");
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return capitalizedWords.join(" ");
  };

  useEffect(() => {
    if (pathname) {
      const formatUrl = formatString(pathname);
      if (formatUrl.length >= 2) {
        const firstPart = capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 2]));
        const secondPart = capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 1]));
        setNewPath(
          <>
            <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 2]}`}>{firstPart}</NavLink> -{" "}
            <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 2]}/${formatUrl[formatUrl.length - 1]}`}>{secondPart}</NavLink>
          </>
        );
      } else if (formatUrl.length === 1) {
        const part = capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 1]));
        setNewPath(
          <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 1]}`}>{part}</NavLink>
        );
      }
    }
  }, [pathname]);

  return (
    <div style={{ color: 'white', display: 'flex', minWidth: '100vw', height: '20vh', background: '#00b894', position: 'relative', top: '70px' }}>
      <div style={{ position: 'absolute', display: 'flex', top: '40%', left: '2%' }}>
      <NavLink style={{ color: "white" }} to={`/`}>Home</NavLink>
        <div style={{ color: 'white', marginLeft: '10px' }}>
          {newPath ? newPath : <p>Page not found</p>}
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
