import { SocialLinks } from './section.types';

/**
 * Trainer profile
 */
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: SocialLinks;
}
