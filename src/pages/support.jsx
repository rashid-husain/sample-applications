import { useState } from "react";
import RegistrationForm from "./registrationForm";

const Support = () => {
  const [name, setName] = useState('rashid');
  const [firstName, setFirstName] = useState('Rashid');

  const obje = {
    name:''
  }

  return (<>
    <div>Support</div>
    <RegistrationForm/>
    <div>Starting from the here</div>

  </>)
}
export default Support;