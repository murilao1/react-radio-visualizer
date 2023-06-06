interface Id {
  name: string;
  href: string;
  id: string;
  external_urls: {
    spotify: string;
  }
}

interface Image {
  url: string;
  width: number;
  height: number;
}

interface Artist extends Id { }

interface Album extends Id {
  release_date: string;
  artists: Artist[];
  images: Image[]
}

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
