const Country = ({country}) => {
    const { name, flags } = country;
    // console.log(country);
  return (
    <div>
      <h3>Name: {name.common}</h3>
      <img height="150px" width="300px" src={flags.png} alt={flags.alt} />
    </div>
  );
}

export default Country