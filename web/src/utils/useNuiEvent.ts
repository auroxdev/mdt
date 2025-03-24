/**
 * A hook that manage events listeners for receiving data from the client scripts
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this hook
 *
 * @example
 * useNuiEvent<{visibility: true, wasVisible: 'something'}>('setVisible', (data) => {
 *   // whatever logic you want
 * })
 *
 **/

import { useEffect, useRef, useCallback } from 'react';

interface NuiMessageData<T = unknown> {
  action: string;
  data: T;
}

type NuiHandlerSignature<T> = (data: T) => void;

const noop = () => {};

export const useNuiEvent = <T = any>(
    action: string,
    handler: (data: T) => void
): void => {
  // Use a ref to store the latest handler
  const handlerRef = useRef<NuiHandlerSignature<T>>(noop);

  // Update the ref value when the handler changes
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  // Create a stable event listener using useCallback
  const eventListener = useCallback((event: MessageEvent<NuiMessageData<T>>) => {
    const { action: eventAction, data } = event.data;

    if (handlerRef.current) {
      if (eventAction === action) {
        handlerRef.current(data);
      }
    }
  }, [action]);

  // Add and clean up the event listener
  useEffect(() => {
    window.addEventListener('message', eventListener);

    return () => window.removeEventListener('message', eventListener);
  }, [action]);
};