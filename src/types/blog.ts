export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'bold'; text: string }
  | { type: 'bullet-list'; items: string[] }
  | { type: 'numbered-list'; items: string[] }
  | { type: 'divider' }
  | { type: 'quote'; text: string }
  | { type: 'note'; text: string };

export interface Blog {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  author: string;
  date: string; // ISO format date string (e.g. 'YYYY-MM-DD' or 'YYYY-MM-DDTHH:mm:ss.sssZ')
}
