interface Category {
  id: string;
  title: string;
  type: string;
}

interface Types {
  realMode: number;
  funMode: number;
}

export interface GameI {
  categories: string[];
  features: any[];
  themes: any[];
  icons: any[];
  backgrounds: any[];
  id: string;
  server_game_id: string;
  extearnal_game_id: string;
  front_game_id: string;
  name: string;
  title: string | null;
  ratio: string;
  status: string;
  provider: string;
  show_as_provider: string;
  provider_title: string;
  game_options: any | null;
  blocked_countries: any | null;
  has_age_restriction: number;
  icon_2: string;
  background: string;
  types: Types;
  game_skin_id: string;
  cats: Category[];
  feats: any[];
  thms: any[];
  active: string;
}
