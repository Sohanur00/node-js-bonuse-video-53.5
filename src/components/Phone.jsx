import { useLoaderData } from "react-router-dom";



const Phone = () => {

    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <img src={phone.image} alt="" />
          <h2>{phone.name}</h2>
        </div>
    );
};

export default Phone;