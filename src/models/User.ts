export type Title = 'Mr' | 'Mrs';

export type User = {
  title: Title;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: {
    day: string;
    month: string;
    year: string;
  };
  newsletter: boolean;
  offers: boolean;
  address: {
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    mobile: string;
  };
};


