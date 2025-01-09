





export interface IUser {
  accessToken: string
  id: string;
  email?: string;
  phoneNumber?: string;
  password: string;
  role: string;
  verified: boolean;
  bookmarkedEvents: string[]


}
