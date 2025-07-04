import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kartzmrpjvrdkcbmynlk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcnR6bXJwanZyZGtjYm15bmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTc4MTQsImV4cCI6MjA2NzEzMzgxNH0.xuj9vVCT4wx0dXo1V0q200--D54asxDixNF0pt_5EqQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Character {
  id: number;
  name: string;
  img_type1: string;
  img_type2: string;
  character_rarity: Rarity;
  character_class: Class;
  character_weapon_type: WeaponType;
  character_element: Element;
  atk: number;
  hp: number;
  def: number;
  strength: number;
  agility: number;
  intellect: number;
  will: number;
}

export interface Rarity {
  id: number;
}

export interface Class {
  id: number;
  name: string;
  img: string;
}

export interface WeaponType {
  id: number;
  name: string;
  img: string;
}

export interface Element {
  id: number;
  name: string;
  img: string;
  color: string;
}

