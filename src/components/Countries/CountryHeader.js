import star from './../../icons/star.svg';
import classes from './CountryHeader.module.css';
import Image from '../UI/Image';

function CountryHeader({ name, cca3, region }) {
  let heading = (
    <h2>
      {name.official} ({cca3})
    </h2>
  );

  if (name.official.length > 30) {
    heading = (
      <h2>
        {name.common} ({cca3})<span data-content={name.official}>!</span>
      </h2>
    );
  }

  return (
    <header className={classes.header}>
      <Image
        src={star}
        alt="Save country action icon"
        loadStyle={{
          float: 'right',
        }}
      />
      {heading}
      <p>{region}</p>
    </header>
  );
}

export default CountryHeader;
