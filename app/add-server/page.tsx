import Form from "@/components/AddServer/Form";
import { NavbarMain } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="mt-[1%]">
      <NavbarMain fixed={true}/> 
      <Form />
    </div>
  );
}