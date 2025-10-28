import { LucideIcon } from 'lucide-react';

export interface Category {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  authorRole?: string;
  authorBio?: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
}

export interface Tag {
  name: string;
  description: string;
}
