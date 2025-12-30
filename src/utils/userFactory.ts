import { faker } from '@faker-js/faker';
import type { Title, User } from '../models/User';

export type BaseUserRecord = {
  label: string;
  title: Title;
  password: string;
  dob: { day: string; month: string; year: string };
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

function slug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/^\.+|\.+$/g, '');
}

export function buildRandomUser(base: BaseUserRecord): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const unique = `${Date.now()}-${faker.string.alphanumeric(6).toLowerCase()}`;

  // Using example.com avoids sending email to real domains; site accepts any format.
  const email = `${slug(firstName)}.${slug(lastName)}.${unique}@example.com`;

  return {
    title: base.title,
    firstName,
    lastName,
    email,
    password: base.password,
    dob: base.dob,
    newsletter: base.newsletter,
    offers: base.offers,
    address: {
      company: base.address.company || faker.company.name(),
      address1: base.address.address1 || faker.location.streetAddress(),
      address2: base.address.address2 || '',
      country: base.address.country,
      state: base.address.state || faker.location.state(),
      city: base.address.city || faker.location.city(),
      zip: base.address.zip || faker.location.zipCode(),
      mobile: base.address.mobile || faker.phone.number(),
    },
  };
}


