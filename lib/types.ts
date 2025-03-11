export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  cover?: string;
  tags?: string[];
} 