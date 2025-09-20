import { House } from "./house/index.js";

export interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: "1",
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
          _id: "101",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "102",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "103",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "2",
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
          _id: "201",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "202",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "203",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "3",
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
          _id: "301",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "302",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "303",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "4",
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
          _id: "401",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "402",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "403",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "5",
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
          _id: "501",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "502",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "503",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "6",
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
          _id: "601",
          date: new Date("09/11/1998"),
          reviewer_name: "Francesco",
          comments: "Our stay was great",
        },
        {
          _id: "602",
          date: new Date("09/12/1993"),
          reviewer_name: "Andrea",
          comments: "Our stay was not great",
        },
        {
          _id: "603",
          date: new Date("09/01/1998"),
          reviewer_name: "Emilia",
          comments: "Nice place",
        },
      ],
    },
    {
      _id: "7",
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
          _id: "071",
          date: new Date("09/11/1998"),
          reviewer_name: "Pepe",
          comments: "Our stay was great",
        },
        {
          _id: "702",
          date: new Date("09/12/1993"),
          reviewer_name: "Marisa",
          comments: "Our stay was not great",
        },
        {
          _id: "703",
          date: new Date("09/01/1998"),
          reviewer_name: "Laura",
          comments: "Nice place",
        },
      ],
    },
  ],
};
