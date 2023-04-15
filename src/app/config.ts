interface EnvVariables extends NodeJS.Process {
  SERVER_PORT?: string;
}

export function getConfig(env: EnvVariables) {
  return {
    app: {
      port: Number(env.SERVER_PORT) ?? 3000
    }
  };
}