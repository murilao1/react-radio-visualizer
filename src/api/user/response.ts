import { Id, Image } from "@/api/types";

export default interface UserResponse extends Omit<Id, 'name'> {
  display_name: string;
  images: Image[]
}
