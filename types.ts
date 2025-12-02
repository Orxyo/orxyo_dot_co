// Fix: Import React to resolve namespace error
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  timestamp: Date;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
}