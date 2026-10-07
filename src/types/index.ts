// Shared TypeScript Types for Amazigh Platform

export type EducationLevel = 'PRIMARY' | 'MIDDLE' | 'SECONDARY';

export interface DialectVariantData {
  id: string;
  dialectCode: string;
  dialectName: string;
  region: string;
  localSpelling: string;
  audioPronunciation?: string;
}

export interface DictionaryEntryData {
  id: string;
  tifinagh: string;
  latinTamaziɣt: string;
  arabicMeaning: string;
  frenchMeaning?: string;
  root?: string;
  partOfSpeech: string;
  isLexicalCommon: boolean;
  isStandardized: boolean;
  standardCategory?: string;
  audioUrl?: string;
  variants: DialectVariantData[];
  commonRegions?: string[];
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  level: EducationLevel;
  gradeYear: number;
  curriculumCode: string;
  modulesCount: number;
  lessonsCount: number;
}

export interface MuseumExhibitData {
  id: string;
  title: string;
  period: string;
  region: string;
  description: string;
  mediaType: 'VIDEO_3D' | 'MOTION_GRAPHICS' | 'LIVE_ACTION' | 'ARTIFACT_IMAGE';
  mediaUrl: string;
  thumbnailUrl?: string;
  coordinates?: { lat: number; lng: number };
}

export interface TeacherContributionData {
  id: string;
  authorName: string;
  wilaya: string;
  title: string;
  targetLevel: EducationLevel;
  summary: string;
  createdAt: string;
}

export interface CulturalPostData {
  id: string;
  authorName: string;
  wilayaOrigin: string;
  category: string;
  title: string;
  content: string;
  likesCount: number;
  createdAt: string;
}
