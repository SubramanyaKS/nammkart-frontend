import axios from "axios";
import { useState } from "react";
import { backendurl } from "../utils/constant";
import { useRouter } from "next/navigation";

const useProductData = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: 0,
        discount:0,
        imageUrl:'',
        available:false,
        quantity:0,
        rating:0.0,
        brand:'',
        category:'',

      });
      const router = useRouter();

      const handlecheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, available: event.target.checked });
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form",formData.available)
        try {
          const response = await axios.post(`${backendurl}/api/products/`, formData);
          alert("Product added successfully!");
          console.log(response.data);
          router.back();
        } catch (error: any) {
          alert("Failed to add product.");
          console.error(error.response?.data || error.message);
        }
      };

      return {formData,handleChange,handleSubmit,handlecheckChange}
}

export default useProductData;