
export default interface Item {
    id:string,
    name: string,
    category: string,
    price: number,
    image: string[],
    materials: string[],
    description: string,
    colorOptions?: string[]
}

export interface CartItemI{
    id:number,
    name:string,
    image:string[],
    itemPrice:number,
    totalPrice:number,
    color?: string,
    colorOptions?: string[],
    quantity: number,
}

export interface LinkItem{
    itemName: string,
    subCategories?: string[]
}

export interface CartState{
    cartItems : CartItemI[];
}

export interface AdminLogin{
    login : boolean,
    errorMessage ?: string
}

