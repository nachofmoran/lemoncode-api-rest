import { ObjectId } from "mongodb";

export interface House {
  _id: ObjectId;
  name: string;
  summary: string;
  address: Address;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews?: Review[];
}

export interface Review {
  _id: string | ObjectId;
  date: Date | string;
  reviewer_name: string;
  comments: string;
}

interface Address {
  street: string;
}
