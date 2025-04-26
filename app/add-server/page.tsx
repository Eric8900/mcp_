import Form from "@/components/AddServer/Form";
import { NavbarMain } from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NavbarMain fixed={true}/> 
      <Form />
    </div>
  );
}