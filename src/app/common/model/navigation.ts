export type NavItem = {
  label: string;
  path: string;
  icon: string;
};

export type MenuItem = {
  visible?: boolean | (() => boolean);
} & (
  | {
      label: string;
      path: string;
      icon: string;
      separator?: false;
      command?: never;
    }
  | {
      label?: never;
      path?: never;
      icon?: never;
      separator: true;
      command?: never;
    }
  | {
      label: string;
      path?: never;
      icon: string;
      separator?: false;
      command: (event?: Event) => void;
    }
);
