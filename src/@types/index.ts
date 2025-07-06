export interface AuthType{
    image:string,
    _id:string,
    building_address:{
    country:string,
    town:string,
    street_address:string,
    extra_address:string,
    state:string,
    zip:string,
    }
    created_at:string,
    created_by:string,
    email:string,
    followers:[],
    name:string,
    order_list:[],
    password:string,
    permission:{create:boolean,delete:boolean,update:boolean,read:boolean}, 
    phone_number:string,
    profile_photo:string,
    surname:string,
    user_type:string,
    username:string,
    wishlist:[],
    id:string,
}
export interface CategoriesType{
     count:number,
     route_path:string,
     title:string,
     _id:string,
}
export interface DataType<T>{
    isLoading:boolean,
    isError:boolean,
    data?:T
    _id:string,
}
export interface DiscountFlowerType{
    discount_up_to:number,
    id:number,
    poster_image_url:string,
    title:string,
}
        export interface ProductsType{
            _id:string,
            category:string,
            comments:string[],
            description:string,
            detailed_images:string[],
            discount:boolean,
            discount_price:string,
            main_image:string,
        price:number,
        rate:number,
        short_description:string,
        sold_times:number,
        tags:[],
        title:string,
        views:number,
        
            }   

export interface UserType {
    _id: string;
    name: string;
    surname: string;
    profile_photo: string;
    followers?: string[];
    following?: string[];
  }
  
  export interface AuthUser {
    _id: string;
    name: string;
    surname: string;
    email: string;
    profile_photo: string;
    followers?: string[];
    following?: string[];
  }
  
  export interface AppUser {
    _id: string;
    name: string;
    surname: string;
    profile_photo: string;
    followers?: string[];
  }
  
  export interface SessionUser {
    _id: string;
    name: string;
    surname: string;
    profile_photo: string;
    followers?: string[];
    following?: string[];
    bio?:string,

  }
  export interface CheckoutModalType {
    _id: string
    createdAt: string
    total: number
    products: {
      title: string
      quantity: number
      price: number
    }[]
  }
  