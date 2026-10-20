export type ServiceId =
  | "hysterectomy"
  | "endometriosis"
  | "fibroids"
  | "prp"
  | "laparoscopy"
  | "hysteroscopy"
  | "adenomyosis"
  | "c_section"
  | "natural_birth";

export type ServiceConfig = {
  id: ServiceId;
  image: string;
  categoryKey: string;
  href: string;
};

export type ServiceItem = {
  id: ServiceId;
  image: string;
  category: string;
  title: string;
  description: string;
  href: string;
};

export type ServicesProps = {
  className?: string;
};
