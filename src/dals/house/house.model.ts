export interface House {
  _id: string;
  name: string;
  summary: string;
  address: Address;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews?: Review[];
}

export interface Review {
  _id: string;
  date: Date;
  reviewer_name: string;
  comments: string;
}

interface Address {
  street: string;
}
