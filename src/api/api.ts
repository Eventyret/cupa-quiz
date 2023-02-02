import { isDev } from "../helpers/helpers";
import { ApiResponse } from "../helpers/types";

export const getQuestions = async (): Promise<ApiResponse | undefined> => {
  // Should fetch from secret but we are using hardcoded url here
  // Setting up a proxyURL for CORS issues please README
  const url = `https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json`;
  const proxyURL = `https://proxy.fairytales.dev/`;

  try {
    const response = await fetch(isDev() ? `${proxyURL}${url}` : url);
    if (response.ok) return await response.json();
    new Error(response.status.toString());
    // if response is not ok we want to throw new Error(""); pass it the error and catch it below
  } catch (error: any) {
    return error;
  }
};
