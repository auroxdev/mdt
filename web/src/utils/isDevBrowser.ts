/*
 * A utility function that checks if the app is running in development mode
 * and is being executed in a browser environment.
 * Returns true if both conditions are met, false otherwise.
 */

export const isDevBrowser = (): boolean => {
  return import.meta.env.DEV && !(window as any).invokeNative;
};