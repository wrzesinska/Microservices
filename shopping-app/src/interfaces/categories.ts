
export interface Category{
  id: string;
  name: string;
  desc: string;
  parentId: string;
}

export interface CategoryCreatePayload{
  name: string;
  desc: string;
  parentId: string;
}
