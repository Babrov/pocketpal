export interface BaseInterface {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}