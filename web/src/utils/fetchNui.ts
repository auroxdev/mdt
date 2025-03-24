/**
 * Simple wrapper around fetch API tailored for CEF/NUI use.
 * This abstraction can be extended to include AbortController if needed or if the response isn't JSON.
 * Tailor it to your needs.
 *
 * @param eventName - The endpoint event name to target.
 * @param data - Data you wish to send in the NUI Callback.
 * @param mockData - Mock data to be returned if in the browser.
 *
 * @returns A promise for the data sent back by the NuiCallbacks CB argument.
 */

import { isDevBrowser } from './isBrowser';

const fetch = window.fetch;
// @ts-expect-error
window.fetch = () => {};
// @ts-expect-error
window.XMLHttpRequest = window.fetch;

export async function fetchNui<T = any>(
  eventName: string,
  data?: any,
  mockData?: T
): Promise<T> {
  // Return mock data if in a browser environment and mockData is provided
  if (isDevBrowser() && mockData) return mockData;


  // Get the resource name or fallback to a default
  const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui-frame-app';

  // Fetch options
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  // Fetch the data from the NUI endpoint
  const response = await fetch(`https://${resourceName}/${eventName}`, options);

  // Parse and return the JSON response
  const formatted = await response.json();

  return formatted;
}