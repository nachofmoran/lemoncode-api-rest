export interface HouseApi {
  id: string;
  name: string;
  summary: string;
  address: AddressApi;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews?: ReviewApi[];
}

export interface ReviewApi {
  id: string;
  date: string;
  reviewerName: string;
  comments: string;
}

interface AddressApi {
  street: string;
}
