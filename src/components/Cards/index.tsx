import Image from "next/image";
import "./style.scss";
import { useRouter } from "next/navigation";
const Card = (props: {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/${props.alpha3Code}`)} className="card">
      <div className="card-image">
        <Image width={420} height={420} src={props.flag} alt={props.name} />
      </div>
      <div className="card-info">
        <h1 className="country-name">{props.name}</h1>
        <div className="country-more-info">
          <p>
            <span>Population:</span> {props.population}
          </p>
          <p>
            <span>Region:</span> {props.region}
          </p>
          <p>
            <span>Capital:</span> {props.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
