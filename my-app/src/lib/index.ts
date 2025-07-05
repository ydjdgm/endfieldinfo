import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Character {
  id: number;
  name: string;
  img_type1: string;
  img_type2: string;
  rarity: Rarity;
  class: Class;
  weapon_type: WeaponType;
  element: Element;
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

