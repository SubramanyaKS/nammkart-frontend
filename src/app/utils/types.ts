import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ChangeEventHandler } from "react";

export type Product = {
    id?:string;
    productID?:string;
    productName: string;
    price: number;
    description: string;
    category: string;
    brand:string;
    imageUrl: string;
    rating: number;
    quantity:number;
    isAvailable:boolean;
    isDiscount:boolean;
    discountPrice:number;
    seller:string;
  };
  export type State = {
    products: Product[];
    error: string | null;
    loading: boolean;
  };
  export type SearchState ={
    products: Product[];
    searchTerm:string;
    searchCategory:string;

  }
  export type UserLogin ={
    email:string;
    password:string;
  }
  export type User={
    username:string;
    password:string;
    phoneno:string;
    email:string;

  }
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
  }
  export type ProductSearchContextType = {
    searchState: SearchState;
    searchDispatch: React.Dispatch<Action>;
  };

  export type AuthContextType = {
    authState: AuthState;
    dispatch: React.Dispatch<AuthActions>;
  };

  export type ProductContextType = {
    state: State;
  };

export type Action =
  | { type: "FETCH_PRODUCTS_SUCCESS"; payload: Product[] }
  | { type: "FETCH_PRODUCTS_FAILURE"; payload: string }
  | { type: "FETCH_PRODUCTS_REQUEST" }
  | { type: "UPDATE_SEARCH_TERM"; payload: string}
  | { type: "SET_SEARCH_RESULTS"; payload:Product[]}
  | { type: "UPDATE_SEARCH_CATEGORY"; payload: string};


export interface CartItem {
  productId:string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string } // productId
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'INCREASE_QUANTITY'; payload:string}
  | { type: 'DECREASE_QUANTITY'; payload:string};

export type AuthActions = 
| {type:'LOGIN';payload:string}
| {type:'LOGOUT';};



  export type InputProps = {
    title: string,
    OnChange: ChangeEventHandler,
    id: string,
    value: string,
    type: string,
    name: string,

}
export type ButtonProps = {
  title: string,
  OnClick?: () => void,
}

export type FormInputProp= {
  title:string;
  type:string;
  id:string;
  placeholder?:string;
  OnChange: ChangeEventHandler,
  value:string;
  name:string;
  hidden?:boolean;

}
export type CheckboxProps ={
  label?: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  checked:boolean;
  name?:string;
}

export type QuantityProps ={
  productid:string;
  quantity:number;
}

export type buttonProps = {
  classN:string;
  OnClick: React.MouseEventHandler<HTMLButtonElement>| undefined;
  title:string;
  src?:string| StaticImport,
}
export type FormProps ={
  formData:Product;
  handleSubmit: (e: React.FormEvent)=>void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  title?:string;
  buttonTitle?:string;
}

export interface StarRatingProps{
  rating:number,
  numReview:number,
}