// convertKit.ts

import axios, { AxiosResponse } from 'axios';

const API_KEY = 'HIFrauVcmvMRe-v2kaQyHw';
const API_URL = 'https://api.convertkit.com/v3';

interface ConvertKitResponse {
    data: any; // Define the structure of the response data based on your needs
}

export async function subscribeToConvertKit(email: string): Promise<ConvertKitResponse> {
    const url = `${API_URL}/forms/5251006/subscribe`;
    const data = {
        api_key: API_KEY,
        email: email,
    };
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response: AxiosResponse<ConvertKitResponse> = await axios.post(url, data, {
            headers
        });

        return response.data;
    } catch (error) {
        console.error('Error subscribing to ConvertKit:', error);
        throw new Error('Failed to subscribe to ConvertKit');
    }
}
