import { House } from "./house/index.js";
import { ObjectId } from "mongodb";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: new ObjectId(),
      name: "Horto flat with small garden",
      summary:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next t…",
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
      },
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Small flat",
      summary: "One bedroom bucolic neighbourhood right next the station",
      address: {
        street: "San Peter, London, England",
      },
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Big apartment with small garden",
      summary:
        "Two bedroom + sofa-bed in quiet and bucolic neighbourhood right next t…",
      address: {
        street: "Muller Strase, Berlin, Germany",
      },
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Flat",
      summary:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next t…",
      address: {
        street: "Princesa, Madrid, Spain",
      },
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Big studio",
      summary:
        "Three bedroom + sofa-bed in quiet and bucolic neighbourhood right next t…",
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
      },
      bedrooms: 3,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Small studio",
      summary: "One bedroom noisy neighbourhood right next to the stadium",
      address: {
        street: "Strada Magiore, Bologna, Italy",
      },
      bedrooms: 1,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Francesco",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Andrea",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Emilia",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: new ObjectId(),
      name: "Big flat",
      summary: "6 bedroom house",
      address: {
        street: "Sutter Street, San Francisco, United States",
      },
      bedrooms: 6,
      bathrooms: 1,
      beds: 3,
      reviews: [
        {
          _id: new ObjectId(),
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: new ObjectId(),
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
  ],
};
