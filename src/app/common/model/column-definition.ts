export type InputTextDef = {
  type: "text";
  minLength?: number;
  maxLength?: number;
};

export type InputNumberDef = {
  type: "number";
  min?: number;
  max?: number;
};

export type DropdownOptions = {
  label: string;
  value: string | number;
  default?: boolean;
};

export type DropdownDef = {
  type: "dropdown";
  options: DropdownOptions[];
};

export type ToggleDef = {
  type: "toggle";
  trueLabel?: string;
  falseLabel?: string;
};

export type ColumnStyles = {
  cellClassName?: string;
  containerClassName?: string;
};

export type ColumnDefinition<T> = {
  label: string;
  key: keyof T;
  required?: boolean;
  hidden?: boolean;
  type: string;
  styles?: ColumnStyles;
} & (InputTextDef | InputNumberDef | DropdownDef | ToggleDef);
