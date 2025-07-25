import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface ServicesHeaderProps {
  pathname: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ pathname }) => {
  const [newPath, setNewPath] = useState<React.ReactNode | null>(null);

  const formatUrlString = (input: string): string[] => {
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
      const formatUrl = formatUrlString(pathname);
      if (formatUrl.length >= 2) {
        const firstPart = capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 2]));
        const secondPart = capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 1]));
        setNewPath(
          <>
            <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 2]}`}>{firstPart}</NavLink> -{" "}
            <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 1]}`}>{secondPart}</NavLink>
          </>
        );
      }
      const news ='News'
      if(
        formatUrl[formatUrl.length-1] ==news
      ){
        setNewPath(
          <>
            <NavLink style={{ color: "white" }} to={`/${formatUrl[formatUrl.length - 2]}`}>{capitalizeFirstLetter(decodeURIComponent(formatUrl[formatUrl.length - 2]))}</NavLink>
          </>
        );
      }
    }
  }, [pathname]);

  return (
    <div className="service-header-main">
      <div style={{ position: 'absolute', display: 'flex', top: '40%', left: '5.8%' }}>
      <NavLink style={{ color: "white" }} to={`/`}>Home</NavLink>
        <div style={{ color: 'white', marginLeft: '10px' }}>
          {newPath ? newPath : <p>Page not found</p>}
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
