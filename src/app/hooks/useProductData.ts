import axios from "axios";
import { useState } from "react";
import { backendurl } from "../utils/constant";
import { useRouter } from "next/navigation";

const useProductData = ()=>{
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        price: 0,
        discountPrice:0,
        imageUrl:'',
        isAvailable:false,
        quantity:0,
        rating:0.0,
        brand:'',
        category:'',
        isDiscount:false,
        seller:'',

      });
      const router = useRouter();

      const handlecheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, isAvailable: event.target.checked });
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
        try {
          const response = await axios.post(`${backendurl}/api/products/add`, formData);
          alert(`Product added successfully! ${response}`);
          router.back();
        } catch (error: any) {
          alert("Failed to add product.");
          console.error(error.response?.data || error.message);
        }
      };

      return {formData,handleChange,handleSubmit,handlecheckChange}
}

export default useProductData;