export interface Id {
  name: string;
  href: string;
  id: string;
  external_urls: {
    spotify: string;
  }
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Artist extends Id { }

export interface Album extends Id {
  release_date: string;
  artists: Artist[];
  images: Image[]
}
