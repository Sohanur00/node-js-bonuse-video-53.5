import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {

    const phones = useLoaderData();

    return (
        <div>
            <h1>all phones : {phones.length}</h1>

            {
                phones.map(phone =><li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li> )
            }
        </div>
    );
};

export default Phones;