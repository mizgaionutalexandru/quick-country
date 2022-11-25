import { useEffect } from 'react';
import { useState, Fragment } from 'react';
import classes from './Image.module.css';

function Image({ src, alt, loadStyle, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadHandler = () => {
    setIsLoading(false);
  };

  // Automatically 'load' the image after 2 seconds => show alt text | img
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);
  }, []);

  return (
    <Fragment>
      {isLoading && <div className={classes.loadAnim} style={loadStyle}></div>}
      <img
        className={isLoading && classes.loading}
        src={src}
        alt={alt}
        {...props}
        onLoad={onLoadHandler}
      />
    </Fragment>
  );
}

export default Image;
