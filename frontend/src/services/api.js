import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const convertCode = async (code, sourceLanguage, targetLanguage) => {
  const response = await axios.post(`${API_URL}/convert`, {
    code,
    source_language: sourceLanguage,
    target_language: targetLanguage
  });
  return response.data;
};

export const debugCode = async (code) => {
  const response = await axios.post(`${API_URL}/debug`, {
    code
  });
  return response.data;
};

export const checkCodeQuality = async (code) => {
  const response = await axios.post(`${API_URL}/quality`, {
    code
  });
  return response.data;
};
