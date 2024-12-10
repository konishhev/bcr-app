import { useEffect, useState } from "react";

function createSubsribable<T>() {
    const subscribers: Set<(message: T) => void> = new Set();

    return {
        subscribe(cb: (message: T) => void): void {
            subscribers.add(cb);
        },
        unsubscribe(cb: (message: T) => void): void {
            subscribers.delete(cb);
        },
        publish(message: T): void {
            subscribers.forEach((cb) => cb(message));
        }
    }
}

export default function createStateHook<T>(
    initialValue: T
): () => [T, (value: T) => void] {
    const subscribers = createSubsribable<T>();

    return () => {
        const [value, setValue] = useState<T>(initialValue);

        useEffect(() => subscribers.subscribe(setValue), []);

        useEffect(() => {
            return () => {
              subscribers.unsubscribe(setValue);
            };
          }, []);

          return [
            value,
            (v: T) => {
              subscribers.publish(v);
            },
          ];
    }
}