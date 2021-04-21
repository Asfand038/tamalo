export interface BoardSchema {
  title: string;
  id: string;
  owners: string[];
  members: string[];
  background: { [prop: string]: string };
}
