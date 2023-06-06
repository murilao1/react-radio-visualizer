import { Album, Artist, Id } from "@/api/types";

interface Item extends Id {
  artists: Artist[]
  album: Album;
}

export default interface CurrentlyPlayingResponse {
  is_playing: boolean;
  item: Item;
  duration_ms: string;
  progress_ms: number;
  timestamp: number;
}
