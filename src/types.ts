export interface Project {
  id: string;
  title: string;
  category?: 'completed' | 'ongoing';
  sector: 'commercial' | 'industrial' | 'educational' | 'infrastructure';
  image: string;
  location?: string;
  tonnage?: string;
  description?: string;
  steelGrade?: string;
  software?: string;
  standards?: string;
  isAwardWinner?: boolean;
}

export interface SampleDrawing {
  id: string;
  title: string;
  category: 'shop' | 'ab' | 'structural' | 'misc';
  categoryLabel: string;
  image: string;
  sheetNo?: string;
  scale?: string;
  standards?: string;
  description?: string;
  format?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface QuoteCalculation {
  projectName: string;
  serviceType: string;
  tonnage: number;
  drawingType: string;
  estimatedHours: number;
  estimatedCost: number;
}
