/**
 * Supported locales for the application
 */
export type Locale = 'en' | 'ru' | 'be' | 'pl' | 'uk';

/**
 * Localized text content
 */
export type LocalizedText = Record<Locale, string>;

/**
 * Localized array of strings
 */
export type LocalizedArray = Record<Locale, string[]>;

/**
 * Media formats for images
 */
export interface ImageMedia {
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
}

/**
 * Video media with poster and formats
 */
export interface VideoMedia {
  mp4?: string;
  webm?: string;
  poster?: string;
  alt: LocalizedText;
}

/**
 * Product links (website, demo, GitHub, etc.)
 */
export interface ProductLinks {
  website?: string;
  demo?: string;
  github?: string;
  pressKit?: string;
  other?: Record<string, string>;
}

/**
 * Metrics for investors (user growth, revenue, etc.)
 */
export interface ProductMetrics {
  key: LocalizedText;
  value: string | number;
  trend?: 'up' | 'down' | 'stable';
  description?: LocalizedText;
}

/**
 * Investment information
 */
export interface InvestmentInfo {
  problem: LocalizedText;
  solution: LocalizedText;
  metrics: ProductMetrics[];
  traction: LocalizedText;
  request: {
    round: LocalizedText;
    amount: LocalizedText;
  };
  contact: {
    email: string;
    telegram?: string;
    linkedin?: string;
  };
}

/**
 * Main Product type
 */
export interface Product {
  // Basic info
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  shortDescription?: LocalizedText;

  // Tech stack
  techStack: string[];

  // Media
  thumbnail: ImageMedia;
  screenshots?: ImageMedia[];
  video?: VideoMedia;
  gallery?: (ImageMedia | VideoMedia)[];

  // Links
  links: ProductLinks;

  // Investment info
  investment: InvestmentInfo;

  // Status
  status: 'active' | 'in-development' | 'paused';
  featured?: boolean;

  // Metadata
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
}

/**
 * Product card data (minimal info for listing)
 */
export type ProductCard = Pick<
  Product,
  'id' | 'slug' | 'title' | 'shortDescription' | 'techStack' | 'thumbnail' | 'status' | 'featured'
>;
