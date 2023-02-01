import { ApiResponse } from "./api.model";

export const getQuestions = async (): Promise<ApiResponse | undefined> => {
  // Should fetch from secret but we are using hardcoded url here
  const url = `https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json`;
  const proxyURL = `https://proxy.fairytales.dev/`;

  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {}
};
