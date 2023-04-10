export type PostType = {
  avatar: string;
  displayName: string;
  image: string;
  text: string;
  timestamp?: { seconds: number; nanoseconds: number };
  userName: string;
  verified: boolean;
};
