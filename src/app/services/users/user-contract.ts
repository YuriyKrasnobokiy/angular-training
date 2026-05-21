export interface User {
  id: number,
  name: string,
  phone: string,
  username: string,
  email: string,
  website: string,
  address: Address,
  company: Company
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

export interface Geo {
  lat: string,
  lng: string
}

export interface Company {
  bs: string,
  catchPhrase: string,
  name: string
}