// src/env.js

export const env = { ...process.env, ...window['env'] }