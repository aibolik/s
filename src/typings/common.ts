export type EntityType = 'leads' | 'contacts' | 'company' | 'custom_fields';

export interface Links {
  self: {
    href: string;
  };
  next?: {
    href: string;
  };
  prev?: {
    href: string;
  }
}

export interface EntityCustomField {
  field_id: number;
  field_name: string;
  field_code?: any;
  field_type: string;
  values: any;
}

export interface EmbeddedContact {
  id: number;
  is_main: boolean;
  _links: Links;
}

export interface DateTimeSettings {
  date_pattern: string;
  short_date_pattern: string;
  short_time_pattern: string;
  date_formant: string;
  time_format: string;
  timezone: string;
  timezone_offset: string;
}

export interface Embedded {
  tags?: any;
  leads?: any;
  companies?: any;
  contacts?: EmbeddedContact[];
  datetime_settings?: DateTimeSettings;
}

export type ListResponse<K extends EntityType, T> = {
  _page?: number;
  _links: Links;
  _embedded: Record<K, T[]>;
}
