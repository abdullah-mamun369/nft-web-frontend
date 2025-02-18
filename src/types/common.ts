export type ResponseSuccessType = {
  data: any;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TNftData = {
  _id: string;
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
