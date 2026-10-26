export const IMAGES = {
  studioHero: `${import.meta.env.BASE_URL}images/studio-hero.jpg`,
  harbourHotel: `${import.meta.env.BASE_URL}images/harbour-hotel.jpg`,
  udaipurHaveli: `${import.meta.env.BASE_URL}images/udaipur-haveli.jpg`,
  bengaluruAtelier: `${import.meta.env.BASE_URL}images/bengaluru-atelier.jpg`,
  mumbaiApartment: `${import.meta.env.BASE_URL}images/mumbai-apartment.jpg`,
  nilgirisStudy: `${import.meta.env.BASE_URL}images/nilgiris-study.jpg`,
  alibaugVerandah: `${import.meta.env.BASE_URL}images/alibaug-verandah.jpg`,
  materialDetail: `${import.meta.env.BASE_URL}images/material-detail.jpg`,
  foundersPortrait: `${import.meta.env.BASE_URL}images/founders-portrait.jpg`,
  journalLight: `${import.meta.env.BASE_URL}images/journal-light.jpg`
};
// ---------------------------------------------------------------------------
// SIX-COLOUR TOKEN SYSTEM ("Six colour tokens in one file and no accent:
// the photography supplies the colour. Change a token and the whole site follows.")
// ---------------------------------------------------------------------------
export const STONE_PALETTES = {
  dholpur: {
    id: 'dholpur',
    name: 'Dholpur Sandstone (Original)',
    region: 'Rajasthan / Default Stone Ground',
    tokens: {
      bg: '#F4F4F0',
      surface: '#FFFFFF',
      muted: '#EAE9E3',
      fg: '#1C1C1C',
      mutedFg: '#666662',
      border: '#E2E1DA'
    }
  },
  jaisalmer: {
    id: 'jaisalmer',
    name: 'Jaisalmer Warm Limestone',
    region: 'Thar Desert / Warm Ochre Ground',
    tokens: {
      bg: '#F6F2E9',
      surface: '#FFFDF9',
      muted: '#ECE5D8',
      fg: '#211D18',
      mutedFg: '#6E665C',
      border: '#E3DBC9'
    }
  },
  kota: {
    id: 'kota',
    name: 'Honed Kota Stone',
    region: 'Hadoti Plateau / Cool Mineral Grey-Green',
    tokens: {
      bg: '#EFF1EE',
      surface: '#FFFFFF',
      muted: '#E3E7E2',
      fg: '#181C19',
      mutedFg: '#5E6660',
      border: '#D8DDD6'
    }
  },
  laterite: {
    id: 'laterite',
    name: 'Konkan Lime & Laterite',
    region: 'Malabar & Alibaug / Earthy Shell Lime',
    tokens: {
      bg: '#F5EFEA',
      surface: '#FFFFFF',
      muted: '#EBE2DA',
      fg: '#221B17',
      mutedFg: '#6D615A',
      border: '#E2D6CC'
    }
  }
};
