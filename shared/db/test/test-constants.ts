export const DEFAULT_SAFE_CONFIG = {
  id: "ephemurl-test-db",
  theme: {
    light: {
      fg: {
        "100": "#ffffff",
        "200": "#b9b9b9",
        "300": "#777777",
        "400": "#3b3b3b",
        "500": "#000000",
      },
      bg: {
        "100": "#000000",
        "200": "#3b3b3b",
        "300": "#777777",
        "400": "#b9b9b9",
        "500": "#ffffff",
      },
    },
    dark: {
      fg: {
        "100": "#000000",
        "200": "#3b3b3b",
        "300": "#777777",
        "400": "#b9b9b9",
        "500": "#ffffff",
      },
      bg: {
        "100": "#ffffff",
        "200": "#b9b9b9",
        "300": "#777777",
        "400": "#3b3b3b",
        "500": "#000000",
      },
    },
    radius: "0.5rem",
    mode: "system-dark",
  },
  params: "hide",
};

export class MockedBroadcastChannel extends BroadcastChannel {
  static listeners = new Map<string, any>();
  name: string;

  constructor(name: string) {
    super(name);

    this.name = name;

    MockedBroadcastChannel.listeners.set(name, [
      ...(MockedBroadcastChannel.listeners.get(name) ?? []),
    ]);
  }

  postMessage(): void {
    for (let l of MockedBroadcastChannel.listeners.get(this.name)) {
      l();
    }
  }

  addEventListener(type: string, listener: any) {
    if (type === "message") {
      MockedBroadcastChannel.listeners.set(this.name, [
        ...(MockedBroadcastChannel.listeners.get(this.name) ?? []),
        listener,
      ]);
    }
  }

  removeEventListener(type: string, listener: any) {
    if (type === "message") {
      MockedBroadcastChannel.listeners.set(
        this.name,
        (MockedBroadcastChannel.listeners.get(this.name) ?? []).filter(
          (l: any) => l !== listener
        )
      );
    }
  }
}
