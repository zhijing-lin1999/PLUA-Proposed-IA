
export type CategoryID = 'PLUS' | 'Zoom' | 'Slack';

export interface Article {
  id: string;
  title: string;
  category: CategoryID;
  subCategory: string;
  estimatedReadTime: string;
  summary: string;
  sections: { title: string; content: string; id: string }[];
}

export interface SubCategory {
  title: string;
  articles: Article[];
}

export interface Category {
  id: CategoryID;
  title: string;
  icon: string;
  subCategories: SubCategory[];
}
