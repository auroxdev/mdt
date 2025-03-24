/**
 * Emulates dispatching an event using SendNuiMessage in the lua scripts.
 * This is used when developing in a browser environment.
 *
 * @param events - The event(s) you want to emulate.
 * @param options - Configuration options for debugging.
 * @param options.timer - How long until the event should trigger (in milliseconds). Default is 1000ms.
 * @param options.force - Whether to force the event to trigger even outside development mode. Default is false.
 */

import { isDevBrowser } from './isDevBrowser';

interface DebugEvent<T = unknown> {
  action: string;
  data: T;
}

export const debugData = <P>(
  events: DebugEvent<P> | DebugEvent<P>[],
  options: { timer?: number; force?: boolean } = {}
): void => {
  const { timer = 1000, force = false } = options;

  // Only run in development or if forced
  if (isDevBrowser() || force) {
    const eventList = Array.isArray(events) ? events : [events];

    eventList.forEach((event, index) => {
      setTimeout(() => {
        window.dispatchEvent(
          new MessageEvent('message', {
            data: {
              action: event.action,
              data: event.data,
            },
          })
        );
      }, timer * (index + 1)); // Stagger events if multiple are provided
    });
  }
};