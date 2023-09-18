const isInViewport = (element: HTMLElement | null, threshold = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold;
  };
const formatNames = (name:string)=>{
  const splitName = name.split(".");
  const formattedName = splitName && splitName.length > 1 && splitName[splitName.length - 1].trim().toLowerCase();
  return formattedName || name.toLowerCase();
}
export {isInViewport,formatNames}
